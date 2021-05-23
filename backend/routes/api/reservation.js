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
    const { checkInDate,checkOutDate } = req.body;
    const reservation = await Reservation.findByPk(userId);
    await reservation.update({checkInDate,checkOutDate,})
    return res.json(reservation);
  }))


//Create a Reservation (for User)
router.post('/', asyncHandler(async function (req, res) {
    const booking = await Reservation.create(req.body);
    const newBooking = await Reservation.findOne({
        where: { id: booking.id },
        include: [{ User },{ Listing, include:[{Photo}]}]
        })
    return res.json(newBooking)
    })
);


module.exports = router;
