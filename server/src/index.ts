import express from 'express';

// import bcrypt from 'bcrypt';
// import uniqid from 'uniqid';
// import { databaseDataPost } from './database';
const app = express();
import signupRouter from './routes/signup';
import loginRouter from './routes/login';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

app.listen(5000);
