export const parseSlackMessage = (text) => {
  const regexData = text.match(/(?<command>[\w-]+)[\s](?<user>[@\w]+)/);
  return regexData.groups;
};

export const setFireman = (data) => {
  parseSlackMessage(data.text);
};

export default {
  setFireman,
};
