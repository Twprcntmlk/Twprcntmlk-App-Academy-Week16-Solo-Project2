// backend/routes/api/users.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');
const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];


// Sign up
router.post('/',validateSignup,asyncHandler(async (req, res) => {
    const { email, firstName, lastName, password, username} = req.body;
    console.log('this is req.body',req.body)
    const user = await User.signup({ email, firstName, lastName, username, password });
    await setTokenCookie(res, user);
    return res.json({user});
  }),
);

// Get Specific User Info
router.get('/:id', asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  // await setTokenCookie(res, user);
  return res.json({user});
}));

// Update User Info // NOT 100% sure what I will be getting back here
router.put('/:id', asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const { username, email, imageUrl, firstName, lastName ,address, password} = req.body
    const user = await User.findByPk(userId);
    const updatedUser = await user.update({username, email, imageUrl, firstName, lastName, address, password });

    // await setTokenCookie(res, user);
    return res.json({updatedUser});
  })
);

router.put('/photo/:id', singleMulterUpload("image"), asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    console.log("req.file",req.file)
    const imageUrl = await singlePublicFileUpload(req.file);
    console.log("WHERE AM I",imageUrl)
    const user = await User.findByPk(userId);
    const updatedUserImage = await user.update({"imageUrl":imageUrl});

    // await setTokenCookie(res, user);
    return res.json({updatedUserImage});
  })
);

module.exports = router;
