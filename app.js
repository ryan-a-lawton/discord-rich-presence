const { Client } = require('discord-rpc'),
      log = require("fancy-log"),
      events = require('events'),
      fs = require('fs'),
      keys = require('./keys.json');
	  
const rpc = new Client({ transport: keys.rpcTransportType }),
      appClient = keys.appClientID,
      largeImageKey = keys.imageKeys.large,
      smallImageKey = keys.imageKeys.small;

var emitter = new events.EventEmitter(),
    current = {};

async function checkPlayer() {
	let start = parseInt(new Date().getTime().toString().substr(0, 10)),
        end = start + (5 - 3);
	
    var player = {
      uri: "Life",
      name: "Lawyer",
      action: "PLAYING",
      start,
      end
    };
    
    current = player;

    emitter.emit('newPlayer', player);
}

/**
 * Initialise player listeners
 * newPlayer: emits current player
 **/
emitter.on('newPlayer', player => {
  rpc.setActivity({
    details: `👤  ${player.name}`,
    largeImageKey,
    smallImageKey,
    largeImageText: `⛓  ${player.uri}`,
    smallImageText: `🏃  ${player.action}`,
    instance: false,
  });

  log(`Announcing Player: ${player.name}`);
});

rpc.on('ready', () => {
    log(`Connected to Discord! (${appClient})`);
    global.intloop = setInterval(checkPlayer, 1500);
});

rpc.login(appClient).catch(log.error);
