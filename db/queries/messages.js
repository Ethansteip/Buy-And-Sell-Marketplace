const db = require('../connection');

const submitMessage = (message) => {

  const queryParams = [message];

  return db.query(`INSERT INTO messages (user_id, messages, created_at) VALUES (2, $1, NOW());`, queryParams)
    .then(data => {
      return data.rows;
    });
};

module.exports = { submitMessage };
