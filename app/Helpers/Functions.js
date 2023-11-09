const bcrypt = require('bcryptjs');
const prisma = require('../../prisma/prisma');

const maxTokenAge = 12 * 60 * 60 * 1000; // 2hours

function calculatePercentage(number, percentage) {
  return (percentage / 100) * number;
}

function hash(string) {
  return bcrypt.hashSync(string, bcrypt.genSaltSync(10));
}


module.exports = {
  maxTokenAge,
  hash,
  calculatePercentage
};
