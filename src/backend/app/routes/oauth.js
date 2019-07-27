import { Router } from 'express';
import request from 'request';
import 'dotenv/config';
import client from '../core/redis';

const router = Router();

router.get('/', (req, res) => {
  const { code } = req.query;
  if (!code) {
    res.status(401).send('Unauthenticated');
  }

  const form = {
    client_id: process.env.SLACK_CLIENT_ID,
    client_secret: process.env.SLACK_CLIENT_SECRET,
    code,
  };

  request.post('https://slack.com/api/oauth.access', { form }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const data = JSON.parse(body);
      console.log(data);
      client.set(`auth/${data.team_id}`, body);
      res.sendStatus(200);
    } else {
      console.log(err);
    }
  });
});

export default router;
