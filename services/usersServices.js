const { User } = require('../models');

const remove = async (id) => {
  return await User.update(
    { deletedAt: new Date() },
    {
      where: { id },
    }
  );
};

module.exports = {
  remove,
};
