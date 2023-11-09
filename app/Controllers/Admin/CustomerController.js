const prisma = require('../../../prisma/prisma');

async function index(req, res) {
  const users = await prisma.user.findMany({
    where: {
      type: 'customer',
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
  });
  return res.render('admin/customer/index', {
    users,
  });
}

module.exports = {
  index,
};
