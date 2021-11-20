module.exports = {
    name: 'join',
    execute(message, Discord){
        const update = require('../main.js');
        const config = require('../Data/config.json');
        const {MongoClient} = require('mongodb');

        const uri = config.uri
        const mongo_client = new MongoClient(uri);

        const args = message.content.split(/ +/);
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        
        //Check if the user enters an actual link or not.
        if(!regex.test(args[1])) {
           message.reply("Enter a valid link.");
        } 
        else {
            const url = new URL(args[1]);
            console.log(args[1]);

            let server = message.guild.id;
            var prefix = url.hostname.split('.')[0];
            var courseID = url.pathname.split('/')[2];
            async function join(){
                try {
                    await mongo_client.connect();
                    const guild = await mongo_client.db("Users").collection("user_info").findOne({ guild_id: server });
                    
                    //Check if the guild ID exists in the database already.
                    if(prefix == null || courseID == null || isNaN(courseID)){
                        message.reply("This link is invalid.");
                    }
                    else if(guild){
                        message.reply(`A discord server already exists for the _${prefix}_ course with ID: _${courseID}_.`);
                    }
                    else{
                        update.init_join(mongo_client, String(courseID),{
                        guild_id: server,
                        prefix: prefix
                        });
                        console.log('Prefix: ' + prefix + '\nCourse ID: ' + courseID);
                        message.reply(`The _${prefix}_ course with ID: _${courseID}_ registration successful!`);

                    }
                } catch(err) {
                    console.error(err);
                }
            }
            join().catch(console.error);
        }
    }
}
