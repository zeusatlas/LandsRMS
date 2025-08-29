// src/middlewares/authorize.middleware.ts
import { Request, Response, NextFunction } from 'express';

// export function authorize(allowedRoles: string[]) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const user = req.user as { role: string };

//     if (!user || !user.role) {
//       return res.status(401).json({ message: 'Unauthorized: No user role found' });
//     }

//     if (!allowedRoles.includes(user.role)) {
//       return res.status(403).json({ message: 'Forbidden: Access denied for your role' });
//     }

//     next();
//   };
// }


// Temporary dummy middleware will delete later
export function authorize(_allowedRoles: string[]) {
  return (_req: Request, _res: Response, next: NextFunction) => {
    // Authorization bypassed
    next();
  };
}


export function hodOnly(req: Request, res: Response, next: NextFunction) {
  if (req.user?.role !== 'HOD') {
    return res.status(403).json({ message: 'Only HODs can access this resource' });
  }
  next();
}
