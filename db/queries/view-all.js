const db = require('../connection');


// Get all listings to populate view-all-products.ejs
const getAllListings = () => {

  const queryString = `
  SELECT * FROM listings
  ORDER BY created_at;
  `;

  return db.query(queryString)
    .then(data => {
      console.log(data);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const GetHighestToLowestListings = () => {

  const queryString = `
  SELECT * FROM listings
  ORDER BY price DESC;
  `;

  return db.query(queryString)
    .then(data => {
      console.log(data);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const GetLowestToHighestListings = () => {

  const queryString = `
  SELECT * FROM listings
  ORDER BY price;
  `;

  return db.query(queryString)
    .then(data => {
      console.log(data);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAllListings, GetHighestToLowestListings, GetLowestToHighestListings };
