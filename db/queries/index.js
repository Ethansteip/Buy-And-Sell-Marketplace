
const db = require('../connection');


// Get 9 products to populate index.ejs
const getPopularProducts = () => {

  const queryString = `
  SELECT * FROM listings
  ORDER BY created_at
  Limit 9;
  `;

  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getPopularProducts };
