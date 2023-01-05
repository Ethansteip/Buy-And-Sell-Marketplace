const express = require('express');
const router  = express.Router();
const index = require('../db/queries/index');

router.get('/', (req, res) => {

  index.getPopularProducts()
    .then(listings => {
      console.log(listings);
      res.render("index.ejs", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
