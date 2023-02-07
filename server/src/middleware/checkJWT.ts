import express, { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';
const app = express();

export default function checkJWT(req: Request, res: Response, next: NextFunction): Promise<Object> {
  return new Promise((resolve, reject) => {
    const authorizationHeader = req.headers['authorization'];
    const authToken = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!authToken) reject({ success: false, errorContent: 'Missing authorization token' });

    verify(authToken as string, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
      if (err) reject({ success: false, errorContent: 'invalid auth token' });
      (req as any).user = user;
    });
  });
}
