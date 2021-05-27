const express = require('express');
const asyncHandler = require('express-async-handler');
const { Listing, Photo } = require('../../db/models')

const router = express.Router();

//Get All Listings
router.get('/', asyncHandler(async function (req, res) {
    const listings = await Listing.findAll( {include:Photo});
    return res.json(listings);
  }));

//Get Specific Listing
  router.get('/:id', asyncHandler(async function(req, res) {
    const listing = await Listing.findByPk(req.params.id,{include:Photo});
    return res.json(listing);
  }));

//"Delete"/Cancel A Specific Listings (for User)
  router.delete('/:id', asyncHandler(async function(req, res) {
      const listing = await Listing.destroy({where: {id: req.params.id}});
      return res.json(req.params.id)
    }))

  //Edit A Specific Listings Dates (for User)
  router.put('/:id', asyncHandler(async function(req, res) {
      const listingId = req.params.id;
      const { name,description,address,price,guests,bedrooms,baths } = req.body;
      await listing.update({name,description,address,price,guests,bedrooms,baths})
      // const listing = await Listing.findByPk(listingId);
      return res.json(listingId); //assume I get back listingId
    }))

  //Create a Listings (for User)
  router.post('/', asyncHandler(async function (req, res) {
      const listing = await Listing.create(req.body);
      const newListing = await Reservation.findOne({
          where: { id: listing.id }
          })
      return res.json(newListing)
      })
  );


module.exports = router;
