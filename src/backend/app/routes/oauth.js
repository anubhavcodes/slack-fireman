import { Router } from 'express';
import request from 'request';
import 'dotenv/config';

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
    console.log(body);
    if (!err && response.statusCode === 200) {
      console.log(JSON.parse(body).team_id, JSON.parse(body).access_token);
      res.sendStatus(200);
    } else {
      console.log(err);
    }
  });
});

export default router;
