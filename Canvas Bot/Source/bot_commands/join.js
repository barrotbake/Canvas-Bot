module.exports = {
    name: 'join',
    execute(message, Discord){
        const update = require('../main.js');
        const {MongoClient} = require('mongodb');

        const uri = "uri"
        const mongo_client = new MongoClient(uri);

        const args = message.content.split(/ +/);
        const url = new URL(args[1]);
        console.log(args[1]);

        let server = message.guild.id;
        var prefix = url.hostname.split('.')[0];
        var courseID = url.pathname.split('/')[2];
        update.init_join(mongo_client, String(courseID),{
            guild_id: server,
            prefix: prefix
        });
        console.log('Prefix: ' + prefix + '\nCourse ID: ' + courseID);
    }
}
