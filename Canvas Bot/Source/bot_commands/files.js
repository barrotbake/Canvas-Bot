module.exports = {
    name: 'files',
    execute(message, args, Discord){
        const update = require('../main.js');
        const config = require('../config.json');
        const {MongoClient} = require('mongodb');

        const uri = config.uri;
        const mongo_client = new MongoClient(uri);
        
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        let server = message.guild.id;
        let channel = message.channel.id;
        let discord_id = {"guild": `${server}`, "channel": `${channel}`}

        update.updateListing(mongo_client, String(server), { guild_id: server });
        fetch(`http://${config.IP}:${config.Port}/files`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:   JSON.stringify(discord_id)
        })
        console.log(discord_id)
    }
}