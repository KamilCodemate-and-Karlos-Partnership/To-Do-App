import { sign } from 'jsonwebtoken';
import { config } from 'dotenv';

const conf = config();

export default function generateJWT<T>(user: T & object): string {
  const accessToken = sign(user, process.env.ACCESS_TOKEN_SECRET as string);
  return accessToken;
}
