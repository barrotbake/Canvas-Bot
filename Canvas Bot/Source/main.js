const Discord = require('discord.js');
const config = require('./Data/config.json');
const fs = require('fs');

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, TOKEN } = require('./Data/config.json');
const { response } = require('express');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Source/bot_commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./bot_commands/${file}`);
    client.commands.set(command.name, command)
}

client.on("ready", () => console.log("Canvas Bot is online."));

client.once("messageCreate", message => {
    if(message.content == "Hello") message.reply("Hello");
});

client.on("messageCreate", message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if(command === 'studysession'){
        client.commands.get('studysession').execute(message, args, Discord);
    }
    else if(command === 'endsession'){
        client.commands.get('endsession').execute(message, args, Discord);
    }
    else if(command === 'discussion'){
        client.commands.get('discussion').execute(message, args, Discord);
    }
});
/*
const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
]
.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
	
    if(commandName === 'ping'){
    //await interaction.deferReply();
    fetch(`http://76.174.211.132:8080/whatever`)
    }
});
*/
client.login(config.TOKEN);