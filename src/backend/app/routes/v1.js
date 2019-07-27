import { Router } from 'express';
import Fireman from '../controllers/fireman';
import Bot from '../controllers/bot';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'working' });
});

router.post('/bot', Bot.alertFireman);

router.post('/fireman', Fireman.setFireman);

export default router;
