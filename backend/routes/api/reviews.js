const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Review, Listing } = require('../../db/models')

// const validateReview = [
//     check('rating')
//       .exists({ checkFalsy: true })
//       .notEmpty()
//       .withMessage('Please provide a valid rating')
//       .isInt({ min: 1, max: 5 })
//       .withMessage('Rating must be between 1 and 5.'),
//     handleValidationErrors
//   ]

//Get Ratings and Reviews
router.get('/', asyncHandler(async function(req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews);
    }));

router.get('/:id', asyncHandler(async function(req, res) {
  const listingId = req.params.id;
  const reviews = await Review.findByPk(listingId );
  return res.json(reviews);
  }));

//Create a Reviews (for User)
router.post('/', asyncHandler(async function (req, res) {
const review = await Review.create(req.body);
const newReview= await Review.findOne({where: { id: review.id }})
return res.json(newReview)
})
);

//"Delete"/Cancel A Specific Reviews  (NOT USER ID BUT USER AND LISTING ID)
router.delete('/:id', asyncHandler(async (req, res) => {

    const item = await Review.findOne({ where : {id: req.params.id} });
    const removed = await item.destroy();
    return res.json(removed);
  }));

//Edit A Reviews (NOT USER ID BUT USER AND LISTING ID)
router.put('/edit', asyncHandler( async (req, res) => {//validateReview,
    const { Id,review,cleanliness,communication,checkIn,accuracy,location,value } = req.body;

    const change = await Review.update(//updatedReviews return the number of lines modified?
      {review,cleanliness,communication,checkIn,accuracy,location,value},
      {where: {id:Number(Id)}}
    );

    // const Areview = await Review.findOne({where: { id: Id }})
    // // const modReview = {};
    // // modReview[Areview.dataValues.id] = Areview.dataValues;

    // console.log("This is backend Object",Areview.dataValues)
    return res.json({Id}) // Areview.dataValues


  }));


module.exports = router;
