const bcrypt = require('bcrypt');
const { findEmail } = require('./usersServices');
const { generateAuthToken } = require('./jwtServices');

const dataUserToken = (user) => {
  const { id, firstName, lastName, email, image, roleId } = user;
  const token = generateAuthToken({ id, firstName, email });

  return {
    id,
    firstName,
    lastName,
    image,
    roleId,
    token,
    email,
  };
};

const login = async ({ email, password }) => {
  const user = await findEmail(email);

  if (!user) return 'Authenticaction failed Email / Password does not correct.';

  const passwordIsCorrect = bcrypt.compareSync(password, user.password);

  if (!passwordIsCorrect)
    return 'Authenticaction failed Email / Password does not correct.';

  return dataUserToken(user);
};

module.exports = {
  dataUserToken,
  login,
};
