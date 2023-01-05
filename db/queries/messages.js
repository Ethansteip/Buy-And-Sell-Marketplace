const db = require('../connection');

const submitMessage = (message) => {

  const queryString = `
  INSERT INTO messages (user_id, messages, created_at)
  VALUES (2, $1, NOW());
  `;

  const queryParams = [
    message
  ];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAdminMessages = () => {
  return db.query('SELECT FROM messages WHERE user_id = 2;')
    .then((result) => {
      return result.rows[0];
    });
};

module.exports = { submitMessage, getAdminMessages };
