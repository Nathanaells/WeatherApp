const bcyrpt = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcyrpt.genSaltSync(10);
  return bcyrpt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcyrpt.compareSync(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
