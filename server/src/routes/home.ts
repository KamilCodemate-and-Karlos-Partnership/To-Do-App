import express from 'express';
import checkJTW from '../middleware/checkJWT';

const homeRouter = express.Router();

interface UserData {
  id: string;
  username: string;
  email: string;
  token: string;
}

homeRouter.get('/', checkJTW, (req, res) => {
  res.status(201).json({ success: true });
});

export default homeRouter;
