import express from 'express';
import bcrypt from 'bcrypt';
import { databaseDataPost } from '../database';
import generateJWT from '../utils/generateJWT';

const loginRouter = express.Router();

interface UserData {
  login: string;
  password: string;
}
let user: UserData;
loginRouter.post('/', async (req, res) => {
  user = {
    login: req.body.email,
    password: req.body.password,
  };

  if (!(user.login && user.password)) {
    return res.status(400).json({ success: false, errorContent: 'Fill all forms to log in' });
  }

  const query = `SELECT * FROM users WHERE email = '${user.login}'`;
  try {
    const databaseRetData = await databaseDataPost(query);

    const actualPassword: string = databaseRetData[0].password;

    let isCorrectPassword: boolean;
    bcrypt.compare(user.password, actualPassword).then(function (result) {
      if (result) {
        const accessToken = generateJWT(user);
        console.log(accessToken);
        return res.status(200).json({
          success: true,
          session: databaseRetData.id,
          userData: { id: databaseRetData[0].id, username: databaseRetData[0].username, email: databaseRetData[0].email },
          authorizationToken: accessToken,
        });
      } else return res.status(401).json({ success: false, errorContent: 'Incorrect email or password' });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, errorContent: 'Something went wrong' });
  }
});

export default loginRouter;
