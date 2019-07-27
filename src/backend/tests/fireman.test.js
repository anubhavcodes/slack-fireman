import { parseSlackMessage } from '../app/controllers/fireman';

const data = {
  command: '/fireman',
  text: 'set-fireman @shamin616',
};

describe('Fireman Controller', () => {
  it('gets the command and userid for fireman', () => {
    expect(parseSlackMessage(data.text))
      .toEqual({
        command: 'set-fireman',
        user: '@shamin616',
      });
  });
});
