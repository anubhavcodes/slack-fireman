import { Router } from 'express';
import Auth from '../controllers/auth';

const router = Router();

router.get('/', Auth.authorizeUser);

export default router;
