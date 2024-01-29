const bcryptjs = require('bcryptjs');

function hashPass(password) {
  return new Promise((resolve, reject) => {
    bcryptjs.genSalt(10, function(err, salt) {
      if (err) {
        reject(err);
      }
      bcryptjs.hash(password, salt, function(err, hash) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
}

module.exports = {
  hashPass
};
