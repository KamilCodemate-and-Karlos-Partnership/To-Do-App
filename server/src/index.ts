import express from 'express';

// import bcrypt from 'bcrypt';
// import uniqid from 'uniqid';
// import { databaseDataPost } from './database';
const app = express();
import signupRouter from './routes/signup';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

interface UserData {
  id: string;
  username: string;
  email: string;
  password: Promise<string> | string;
}

let user: UserData;
app.use('/api/signup', signupRouter);

app.listen(5000);
