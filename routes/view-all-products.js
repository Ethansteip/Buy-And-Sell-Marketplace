
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('view-all-products.ejs');
});

module.exports = router;
