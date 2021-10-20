module.exports = {
    name: 'endsession',
    description: 'This command removes both text and voice channels under an existing category.',
    execute(message, args, Discord){
        const category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        const textChannel1 = message.guild.channels.cache.find(c => c.name == 'notes-resources' && c.type == 'GUILD_TEXT');
        const textChannel2 = message.guild.channels.cache.find(c => c.name == 'homework-help' && c.type == 'GUILD_TEXT');
        const voiceChannel1 = message.guild.channels.cache.find(c => c.name == 'study-room-1' && c.type == 'GUILD_VOICE');
        const voiceChannel2 = message.guild.channels.cache.find(c => c.name == 'study-room-2' && c.type == 'GUILD_VOICE');
        const voiceChannel3 = message.guild.channels.cache.find(c => c.name == 'study-room-3' && c.type == 'GUILD_VOICE');
        if (!category) {
            message.reply("There isn't a study session at the moment. You can create one by using the `&studysession` command.");
        }
        else{
            category.delete();
            textChannel1.delete();
            textChannel2.delete();
            voiceChannel1.delete();
            voiceChannel2.delete();
            voiceChannel3.delete();
            
            message.channel.send("The study session has ended, have a good day.");
        }
    }
}