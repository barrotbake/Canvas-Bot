module.exports = {
    name: 'zoom',
    description: 'Gets the zoom link for the class',
    async execute(message, args, Discord){
        const config = require('../../../Config.json');
        const update = require('../main.js');
        const {MongoClient} = require('mongodb');

        const uri = "uri";
        const mongo_client =  new MongoClient(uri);
        await mongo_client.connect();
        const database =  mongo_client.db("Users");
    const docs = database.collection("user_info");
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    let channel = message.channel.id;
        let server = message.guild.id;
        console.log(server);
        const findResult = await docs.findOne({"guild_id":server});
        console.log(findResult);
        const zoom = findResult.zoom_link;
        if(zoom === null || zoom === undefined || zoom === ""){
            const res2 = await fetch(
                `https://discordapp.com/api/channels/${channel}/messages`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bot ${config.TOKEN}`,
                        Accept: "application/json",
                        "Content-Type": "application/json",
    
                    },
                    
                    body: JSON.stringify({
    
                        content: "**You don't have a zoom link for this class!**"
                    }),
                }
            );
        }

        const res2 = await fetch(
            `https://discordapp.com/api/channels/${channel}/messages`, {
                method: "POST",
                headers: {
                    "Authorization": `Bot ${config.TOKEN}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                
                body: JSON.stringify({

                    content: zoom
                }),
            }
        );


       
       
    }
}
