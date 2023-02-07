import express from 'express';
import bcrypt from 'bcrypt';
import uniqid from 'uniqid';
import { databaseDataPost } from '../database';

const signUpRouter = express.Router();

interface UserData {
  id: string;
  username: string;
  email: string;
  password: Promise<string> | string;
}

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let user: UserData;

signUpRouter.post('/', async (req, res) => {
  try {
    const userCheckData: Omit<UserData, 'id'> = req.body;
    if (!userCheckData.username || !userCheckData.email || !userCheckData.password) {
      return res.status(422).json({ success: false, errorContent: 'Fill in all forms' });
    }
    if (typeof userCheckData.password === 'string' && userCheckData.password.length < 8) {
      return res.status(422).json({ success: false, errorContent: 'Password should contain at least 8 signs' });
    }
    if (userCheckData.password !== req.body.passwordConfirm) {
      return res.status(400).json({ success: false, errorContent: 'Passwords are not the same' });
    }
    if (!emailRegex.test(userCheckData.email)) {
      return res.status(400).json({ success: false, errorContent: 'Incorrect email adress' });
    }
    if (typeof userCheckData.username !== 'string' || userCheckData.username.length < 3 || userCheckData.username.length > 24) {
      return res.status(422).json({ success: false, errorContent: 'Username should have a length between 3 and 24 characters' });
    }
    if (/^\d/.test(userCheckData.username)) {
      return res.status(422).json({ success: false, errorContent: 'Username cannot start with a digit' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, errorContent: 'Something went wrong' });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user = {
      id: uniqid(),
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };
    const controlEmailQuery = `SELECT email FROM users WHERE email = '${user.email}'`;
    const controlData = await databaseDataPost(controlEmailQuery);

    if (controlData.length > 0) {
      return res.status(409).json({ success: false, errorContent: 'This email already exists' });
    }

    const query = `INSERT INTO users (id, username, email, password) VALUES ('${user.id}', '${user.username}', '${user.email}', '${user.password}')`;
    let result;
    databaseDataPost(query)
      .then((data: any) => {
        result = data;
      })
      .catch((error: any) => {
        return res.status(500).json({ success: false, errorContent: 'Something went wrong' });
      });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, errorContent: 'Something went wrong' });
  }
});

export default signUpRouter;
