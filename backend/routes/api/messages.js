const express = require('express');
const asyncHandler = require('express-async-handler');
const { Message } = require('../../db/models')

const router = express.Router();

//Get All Listings
router.get('/', asyncHandler(async function (req, res) {
    const messages = await Message.findAll({order: [['createdAt', 'DESC']]},);
    console.log("are you printing",messages)
    return res.json(messages);
  }));


//"Delete"/Cancel A Specific Listings (for User)
  router.delete('/:id', asyncHandler(async function(req, res) {
      const message = await Message.destroy({where: {id: req.params.id}});
      return res.json(req.params.id)
    }))

  //Edit A Specific messages Dates (for User)
  router.put('/:id', asyncHandler(async function(req, res) {
      const messageId = req.params.id;
      const { name,description,address,price,guests,bedrooms,baths } = req.body;
      const message = await Message.findByPk(messageId);
      await message.update({name,description,address,price,guests,bedrooms,baths})
      return res.json(message);
    }))

  //Create a messages (for User)
  router.post('/', asyncHandler(async function (req, res) {
      const message = await Message.create(req.body);

      return res.json(message)
      })
  );


module.exports = router;
