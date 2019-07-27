import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'working' });
});

router.post('/bot', (req, res) => {
  console.log(req.body.challenge);
  res.send(req.body.challenge);
});

export default router;
