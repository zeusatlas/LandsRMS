import express from 'express';
import academicRoutes from './academic.routes';
import systemSettingsRoutes from './system-settings.routes';
import userRoutes from './users.routes';
import authenticationRoutes from './authentication.routes';
import universalRoutes from './universal.routes';
import houseRoutes from './house.routes';
import admissionRoutes from './admission.routes';
import institutionRoutes from './institution.routes';
// import { offWhite } from '../middlewares/offWhite.middleware';

const router = express.Router();

// router.use(offWhite);
// ✅ Public routes (no offWhite, no JWT)
router.use('/public/en', userRoutes)
router.use('/public/authentication', authenticationRoutes)

// Universal Routes
router.use('/universal', universalRoutes)

// ✅ Protected routes (offWhite is inside this file)
router.use('/academic', academicRoutes);
router.use('/settings', systemSettingsRoutes)
router.use('/inst-group', houseRoutes)
router.use('/admission', admissionRoutes)
router.use('/institution', institutionRoutes)

export default router;
