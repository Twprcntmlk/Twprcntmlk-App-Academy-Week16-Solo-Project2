// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

const reservationRouter = require('./reservation.js');
const listingsRouter = require('./listings.js');
const photosRouter = require('./photos.js');
const reviewsRouter = require('./reviews.js');
const messagesRouter = require('./messages.js');
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/reservation', reservationRouter);

router.use('/listings', listingsRouter);

router.use('/photos', photosRouter);

router.use('/reviews', reviewsRouter);
////BONUS Router to implement Host and User Chat with Host and User Profile Page
router.use('/messages', messagesRouter);
// router.use('/hosts', hostsRouter);

module.exports = router;
