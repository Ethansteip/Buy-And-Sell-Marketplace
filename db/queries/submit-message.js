const db = require('../connection');

const submitMessage = (message) => {
  return db.query('INSERT INTO messages VALUES ();')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
