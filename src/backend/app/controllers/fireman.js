import rp from 'request-promise';
import client from '../core/redis';
import Redis from './redis';

export const parseSlackMessage = (text) => {
  const regexData = text.match(/(?<command>[\w-]+)[\s](?<user>[@\w]+)/);
  return regexData.groups;
};

const getFiremanId = async (userName, teamId) => {
  const authCred = JSON.parse(await Redis(client).getAuthCredentials(teamId));
  const options = {
    url: `${process.env.SLACK_API_URL}users.list`,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authCred.bot.bot_access_token}`,
    },
  };

  const resp = JSON.parse(await rp.post(options));
  return resp.members.find(member => `@${member.name}` === userName);
};

const saveFireman = async (userName, teamId) => {
  const userResp = await getFiremanId(userName, teamId);
  const userData = {
    id: userResp.id,
    userName,
  };
  Redis(client).saveFireman(teamId, JSON.stringify(userData));
};

const setFireman = (req, res) => {
  const data = req.body;
  try {
    const parsedData = parseSlackMessage(data.text);
    saveFireman(parsedData.user, data.team_id);
    res.send(`Fireman is now ${parsedData.user}`);
  } catch (e) {
    console.error(e);
    res.send('Error setting fireman');
  }
};

export default {
  setFireman,
};
