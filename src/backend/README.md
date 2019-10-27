# Slack fireman backend

## How to run locally
### Developement requirements
- Redis
- Ngrok
- Node JS
- npm

## Enviroment Variables
Add these variables to `.env` file in `src/backend/`

```
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
SLACK_API_URL=https://slack.com/api/
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
```

## Running app locally
Install npm dependencies
```
npm install
``` 

Start application
```
npm start
```

App will now be running at http://localhost:3000

## Proxying with ngrok

```
ngrok http 3000
```

Add the ngrok urls to https://api.slack.com/apps 
- Slash Commands
- Events
- OAuth

