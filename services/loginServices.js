const bcrypt = require('bcrypt');
const { findEmail } = require('./usersServices');
const { generateAuthToken } = require('./jwtServices');

const login = async ({ email, password }) => {
  const user = await findEmail(email);

  if (!user) {
    return 'Authenticaction failed Email / Password does not correct.';
  }

  const passwordIsCorrect = bcrypt.compareSync(password, user.password);

  if (!passwordIsCorrect) {
    return 'Authenticaction failed Email / Password does not correct.';
  }

  const dataUser = {
    id: user.dataValues.id,
    firstName: user.dataValues.firstName,
    email: user.dataValues.email,
  };

  const token = generateAuthToken(dataUser);

  const {id,firstName,lastName,image,roleId} = user;

  return {
    id,
    firstName,
    lastName,
    image,
    roleId,
    token,
    email:user.email
  };
};

module.exports = {
  login,
};
