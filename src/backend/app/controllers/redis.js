export default client => ({
  saveFireman(team, username) {
    client.set(`fireman/${team}`, username);
  },

  getFireman(team) {
    return client.get(`fireman/${team}`);
  },

  saveAuthCredentials(teamId, data) {
    client.set(`auth/${teamId}`, data);
  },

  getAuthCredentials(teamId, data) {
    return client.get(`auth/${teamId}`, data);
  },
});
