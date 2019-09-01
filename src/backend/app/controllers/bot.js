import request from 'request';
import rp from 'request-promise';
import 'dotenv/config';
import client from '../core/redis';
import Redis from './redis';

export const parseSlackMessage = (text) => {
  const regexData = text.match(/([\w-@<>]+)[\s](?<message>.+)/);
  return regexData.groups.message;
};

const fetchChannelId = async (userId, authCred) => {
  const options = {
    url: `${process.env.SLACK_API_URL}im.open`,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authCred.bot.bot_access_token}`,
    },
    form: {
      user: userId,
    },
  };

  const resp = JSON.parse(await rp.post(options));
  return resp.channel.id;
};

const sendMessageToFireman = async (message, teamId) => {
  const fireman = JSON.parse(await Redis(client).getFireman(teamId));
  const authCred = JSON.parse(await Redis(client).getAuthCredentials(teamId));
  const options = {
    url: `${process.env.SLACK_API_URL}chat.postMessage`,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authCred.bot.bot_access_token}`,
    },
    form: {
      text: message,
      channel: await fetchChannelId(fireman.id, authCred),
    },
  };

  request.post(options, (err, req, body) => {
    console.log(err, req, body);
  });
};

const alertFireman = (req, res) => {
  const data = req.body;
  const message = parseSlackMessage(data.event.text);
  sendMessageToFireman(message, data.team_id);
  res.send('Fireman is alerted on the same.');
};

export default {
  alertFireman,
};
