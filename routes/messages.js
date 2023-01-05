
const express = require('express');
const router  = express.Router();
const message = require('../db/queries/messages');

router.post('/', (req, res) => {
  const data = req.body;
  console.log(data.message);
  message.submitMessage(data.message).then(() => (res.send('ok')));
});

//get all messages


module.exports = router;
