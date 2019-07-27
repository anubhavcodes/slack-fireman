import Redis from '../app/controllers/redis';
import client from './redisMock';

const authData = {
  auth_token: '123',
  team_id: 'team-id',
};

describe('Redis controller', () => {
  test('saving fireman data to redis', async () => {
    Redis(client).saveFireman('team-id', '@member');
    const fireman = await Redis(client).getFireman('team-id');
    expect(fireman).toBe('@member');
  });

  test('saving auth data to redis', async () => {
    Redis(client).saveAuthCredentials(authData.team_id, JSON.stringify(authData));
    const storeData = await Redis(client).getAuthCredentials(authData.team_id);
    expect(storeData).toBe(JSON.stringify(authData));
  });

  afterAll(() => {
    client.clear();
  });
});
