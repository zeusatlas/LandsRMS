// src/types/express/index.d.ts
import { UserPayload } from '../../utils/user-payload';
import 'multer';

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
      clientMeta?: {
        fingerprint: string;
        platform: string;
        appKey: string;
      };
      file?: Multer.File;
      files?: Multer.File[] | { [fieldname: string]: Multer.File[] };

    }
  }
}

export {}; 
