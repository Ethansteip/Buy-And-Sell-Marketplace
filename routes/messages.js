
const express = require('express');
const router  = express.Router();
const message = require('../db/queries/messages');

router.post('/', (req, res) => {
  const data = req.body;
  console.log(data.message);
  message.submitMessage(data.message)
    .then(() => {
      setTimeout(() => {
        res.redirect('back');
      }, 2000);
    });
});

//Get all admin messages
router.get('/admin', (req, res) => {
  res.send('You made it to the route!');

});


router.get('/', (req, res) => {
  res.render('messages.ejs');

});


router.get('/:id', (req, res) => {
  message.getMessages(req.params.id)
  .then((messages) => {

    res.render("messages.ejs", {messages});
  })
  .catch((err) => {
    console.log(err.message);
  });

  });


module.exports = router;
