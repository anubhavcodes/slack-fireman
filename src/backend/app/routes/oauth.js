import { Router } from 'express';
import 'dotenv/config';

const router = Router();

router.get('/', (req, res) => {
  const { code } = req.query;
  if (!code) {
    res.status(401).send('Unauthenticated');
  }
  res.json({ status: 'working' });
});

export default router;
