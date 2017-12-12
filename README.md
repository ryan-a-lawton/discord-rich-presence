# discord-rich-presence

## Dependencies
  - NodeJS >=8
  - npm (>=5) or Yarn (>=1.2)
  - Discord Canary (preferred)
  - Spotify >= 1.0
  - Git

## Setup

  - Install the modules `npm i` or `yarn`
  - Open Discord & Spotify
  - Start the RPC app `node app.js`
  
## How to run in the background

  - Install pm2 `npm i pm2 -g`
  - Start the app `pm2 start app.js --name="discord-rich-presence"`
  - Use `pm2 log discord-rich-presence` to view the logs
  - Restart the app using `pm2 restart discord-rich-presence`
