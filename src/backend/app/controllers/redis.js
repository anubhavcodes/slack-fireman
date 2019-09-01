export default client => ({
  saveFireman(team, username) {
    client.set(`fireman/${team}`, username);
  },

  getFireman(team) {
    return client.getAsync(`fireman/${team}`);
  },

  saveAuthCredentials(teamId, data) {
    client.set(`auth/${teamId}`, data);
  },

  getAuthCredentials(teamId) {
    return client.getAsync(`auth/${teamId}`);
  },
});
