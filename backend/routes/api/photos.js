const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Photo } = require('../../db/models')

//Get All Listings
router.get('/', asyncHandler(async function (req, res) {
    const photos = await Photo.findAll();
    return res.json(photos);
  }));

//Get Specific Listing
  router.get('/:id', asyncHandler(async function(req, res) {
    const photo = await Photo.findByPk(req.params.id);
    return res.json(photo);
  }));


module.exports = router;
