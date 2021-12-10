/***********************Node.js-Modules***********************/
const Discord = require('discord.js');
const fs = require('fs');
const {MongoClient} = require('mongodb');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

const mongo_client = new MongoClient(process.env.uri);

//This async function trys to connect to the database and calls the listDatabases function.
async function main(){
    try {
        await mongo_client.connect();
        await listDatabases(mongo_client);
    } catch(err) {
        console.error(err);
    }
}
main().catch(console.error);

//This async function lists the databases present using the mongo client.
async function listDatabases(mongo_client){
    databasesList = await mongo_client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//This async function updates existing data in the user_info collection in the Users database.
async function updateListing(mongo_client, nameOfListing, updatedListing) {
    await mongo_client.connect();
    const result = await mongo_client.db("Users").collection("user_info")
    .updateOne({ guild_id: nameOfListing }, { $set: updatedListing });
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

//This async function executes when the join command is used.
async function init_join(mongo_client, nameOfListing, updatedListing) {
    await mongo_client.connect();
    const result = await mongo_client.db("Users").collection("user_info")
    .updateOne({ _courseid: nameOfListing }, { $set: updatedListing });
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

client.on("ready", () => {
    console.log("Canvas Bot is online.");
});

/***********************Command-JS-Files***********************/
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('Canvas Bot/Source/bot_commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./bot_commands/${file}`);
    client.commands.set(command.name, command)
}

/***********************Command-Handler***********************/
client.on("messageCreate", message => {
    if(!message.content.startsWith(process.env.prefix) || message.author.bot) return;
    const args = message.content.slice(process.env.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'studysession'){
        client.commands.get('studysession').execute(message, args, Discord);
    }
    else if(command === 'quote'){
        client.commands.get('quote').execute(message, args, Discord);
}
    else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
}
    else if(command === 'endsession'){
        client.commands.get('endsession').execute(message, args, Discord);
    }
    else if(command === 'discussions'){
        client.commands.get('discussions').execute(message, args, Discord);
    }
    else if(command === 'assignments'){
        client.commands.get('assignments').execute(message, args, Discord);
    }
    else if(command === 'announcements'){
        client.commands.get('announcements').execute(message, args, Discord);
    }
    else if(command === 'files'){
        client.commands.get('files').execute(message, args, Discord);
    }
    else if(command === 'join'){
        client.commands.get('join').execute(message, Discord);
    }
    else if(command === 'zoom'){
        client.commands.get('zoom').execute(message, Discord);
    }
})
client.login(process.env.TOKEN);

//These functions are exported so that they can be used in the files regarding the commands.
exports.updateListing = updateListing;
exports.init_join = init_join;
