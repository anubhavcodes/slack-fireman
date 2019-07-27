import Redis from '../app/controllers/redis';
import client from './redisMock';

const authData = {
  auth_token: '123',
  team_id: 'team-id',
};

describe('Redis controller', () => {
  test('saving fireman data to redis', () => {
    Redis(client).saveFireman('team-id', '@member');
    expect(Redis(client).getFireman('team-id')).toBe('@member');
  });

  test('saving auth data to redis', () => {
    Redis(client).saveAuthCredentials(authData.team_id, JSON.stringify(authData));
    expect(Redis(client).getAuthCredentials(authData.team_id)).toBe(JSON.stringify(authData));
  });

  afterAll(() => {
    client.clear();
  });
});
