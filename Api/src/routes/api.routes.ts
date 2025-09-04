import express from 'express';
// import academicRoutes from './academic.routes';
// import institutionRoutes from './institution.routes';
// import { offWhite } from '../middlewares/offWhite.middleware';

const router = express.Router();

// router.use(offWhite);
// ✅ Public routes (no offWhite, no JWT)
// router.use('/public/en', userRoutes)
// router.use('/public/authentication', authenticationRoutes)

// Universal Routes
// router.use('/universal', universalRoutes)

// ✅ Protected routes (offWhite is inside this file)
// router.use('/academic', academicRoutes);
// router.use('/institution', institutionRoutes)

export default router;
