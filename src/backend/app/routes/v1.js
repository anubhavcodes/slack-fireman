import { Router } from 'express';
import Fireman from '../controllers/fireman';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'working' });
});

router.post('/bot', (req, res) => {
  console.log(req.body);
  res.send(req.body.challenge);
});

router.post('/fireman', Fireman.setFireman);

export default router;
