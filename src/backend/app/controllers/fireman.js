import client from '../core/redis';
import Redis from './redis';

export const parseSlackMessage = (text) => {
  const regexData = text.match(/(?<command>[\w-]+)[\s](?<user>[@\w]+)/);
  return regexData.groups;
};

const setFireman = (req, res) => {
  const data = req.body;
  try {
    const parsedData = parseSlackMessage(data.text);
    Redis(client).saveFireman(data.team_id, parsedData.user);
    res.send(`Fireman is now ${parsedData.user}`);
  } catch (e) {
    console.error(e);
    res.send('Error setting fireman');
  }
};

export default {
  setFireman,
};
