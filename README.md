### A fireman bot for slack

Ever had a lot of internal tasks only directed to one developer? Use @fireman bot in slack to assign a developer as a fireman and all other members in your slack workspace can use @fireman to get help on all the fire hazards in the world.

### Initial idea.

The bot should be simple to setup and use. Setup should happen using slack oauth and once the bot is added to the workspace `@fireman` should be available as a memeber to the workspace.

`@fireman` should be first invited to a channel to be able to use it.

Once add you can then use the `@fireman` bot as follows

`@fireman help` - displays a help
`@fireman set-fireman @member` - assigns a member as a fireman of the workspace.
`@fireman set-fireman @member [days]` = assings a member of the fireman of the workspace for N days. `days` should be an integer.

Once a member is assigned to the fireman, it should be possible for any other member to use @fireman to say anthing and @fireman should then either DM the actual fireman about the message or just repeat the same message in the workspace.

### Design ideas.

This is a great chance to learn something new. `expressjs` is a great framework for this.
We will have the `Dockerfile` to create the project into an image and then initally run this image locally for development and then deploy this somewhere in production. I have some credits in @linode we can use for this. Digital ocean can work too.

### Project planning.

Let's try github board this time and see how it works.

### Development

You can use `run-init` script to setup the project for development. `run-init` script will automatically install the git pre-commit hooks and build the
docker containers for you. The only requirement is that you have [pre-commit](pre-commit.com) and [docker/docker-compose](docker.com) installed.

```
./scripts/run-init
```

There is also support for [direnv](direnv.net) `.envrc` in the project, so if you have `direnv` installed and setup, you can run `direnv` allow in the root of the project and the `run-init` script will be added to the path. So you can just run:

```
run-init
```
