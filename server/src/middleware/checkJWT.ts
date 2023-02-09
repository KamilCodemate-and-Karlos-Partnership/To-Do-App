import express, { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';
const app = express();

export default function checkJWT(req: Request, res: Response, next: NextFunction): any {
  const authorizationHeader = req.headers['authorization'];
  const authToken = authorizationHeader && authorizationHeader.split(' ')[1];
  if (!authToken) return res.status(401).json({ success: false, errorContent: 'Missing authorization token' });

  verify(authToken as string, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    if (err) return res.status(401).json({ success: false, errorContent: 'invalid authorization token' });
    (req as any).user = user;
    next();
  });
}
