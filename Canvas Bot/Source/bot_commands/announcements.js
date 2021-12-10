module.exports = {
    name: 'announcements',
    execute(message, args, Discord){
        const update = require('../main.js');
        const {MongoClient} = require('mongodb');

        const mongo_client = new MongoClient(process.env.uri);
        
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        let server = message.guild.id;
        let channel = message.channel.id;
        let discord_id = {"guild": `${server}`, "channel": `${channel}`}

        update.updateListing(mongo_client, String(server), { guild_id: server });
        fetch(`https://canvasbotapi.herokuapp.com/announcements`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:   JSON.stringify(discord_id)
        })
        console.log(discord_id)
    }
}
