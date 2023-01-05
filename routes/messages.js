
const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  console.log(data);

});

//get all messages


module.exports = router;
