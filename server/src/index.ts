import express from 'express';
const app = express();
///
import signupRouter from './routes/signup';
import loginRouter from './routes/login';
import homeRouter from './routes/home';
///
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

app.use('/api/homeRequests', homeRouter);

app.listen(5000);
