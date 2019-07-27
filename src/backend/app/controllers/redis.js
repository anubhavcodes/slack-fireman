export default client => ({
  saveFireman(team, username) {
    console.log(client, username);
  },

  saveAuthCredentials(teamId, data) {
    client.set(`auth/${teamId}`, data);
  },
});
