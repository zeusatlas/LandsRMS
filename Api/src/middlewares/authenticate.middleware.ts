// src/middlewares/authenticate.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserPayload } from '../utils/user-payload';


// Original authenticate function (temporarily disabled)
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token logout and login again' });
  }
}




// Temporary dummy middleware will delete later
export function authenticate2(req: Request, res: Response, next: NextFunction) {
  // Authentication bypassed temporarily
  next();
}
