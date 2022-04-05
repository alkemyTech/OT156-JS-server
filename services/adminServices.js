const {User,Role} = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    include: [{
        model: Role,
        as: 'role'
    }]
  });
  return users
}
module.exports = {
    getAll
}