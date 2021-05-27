const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Reservation, User, Photo, Listing } = require('../../db/models')

//Get All Reservations (for the page)
router.get('/', asyncHandler(async function (req, res) {
    const reservations = await Reservation.findAll({include:[Listing,User]});

    return res.json(reservations);
  }));

//Get Specific Reservation (for User)
  router.get('/:id', asyncHandler(async function(req, res) {
    const reservation = await Reservation.findByPk(req.params.id);
    return res.json(reservation);
  }));

//"Delete"/Cancel A Specific Reservation (for User)
router.delete('/:id', asyncHandler(async function(req, res) {
    const reservation = await Reservation.destroy({
      where: {id: req.params.id}
    });
    return res.json(req.params.id)
  }))

//Edit A Specific Reservations Dates (for User)
router.put('/:id', asyncHandler(async function(req, res) {
    const userId = req.params.id;
    const { Id, listingId, checkInDate, checkOutDate, guests } = req.body;
    // const reservation = await Reservation.findByPk(Number(Id));
    const changed=await Reservation.update({userId, listingId, checkInDate,checkOutDate, guests},{where: {id:Number(Id)}})
    const Ares = await Reservation.findOne({where: { id: Id}})
    return res.json(Ares.dataValues);

  }))


//Create a Reservation (for User)
router.post('/', asyncHandler(async function (req, res) {
    const reservation = await Reservation.create(req.body);
    const newreservation = await Reservation.findOne({
        where: { id: reservation.id }

        })
    return res.json(newreservation)
    })
);


module.exports = router;
