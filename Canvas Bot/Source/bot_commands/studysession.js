module.exports = {
    name: 'studysession',
    description: 'This command creates both text and voice channels under a newly created category.',
    execute(message, args, Discord){

        const category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        if(category){
            message.reply("A study session has already started.");
        }
        else{
        /*******************Category/Channel-Creation*******************/
        var textChannelArray = ['notes-resources', 'homework-help']
        var voiceChannelArray = ['study-room-1', 'study-room-2', 'study-room-3']
        message.guild.channels.create('STUDY SESSION', { type: 'GUILD_CATEGORY' });

        /*********************Text-Channel-Creation*********************/
        message.guild.channels.create(textChannelArray[0])
        .then(channel => {
        let category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        if (!category) throw new Error('Category does not exist.');
        channel.setParent(category.id);
        }).catch(console.error);

        message.guild.channels.create(textChannelArray[1])
        .then(channel => {
        let category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        if (!category) throw new Error('Category does not exist.');
        channel.setParent(category.id);
        }).catch(console.error);

        /*********************Voice-Channel-Creation*********************/
        message.guild.channels.create(voiceChannelArray[0], {
            type: 'GUILD_VOICE'
        })
        .then(channel => {
        let category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        if (!category) throw new Error('Category does not exist.');
        channel.setParent(category.id);
        }).catch(console.error);

        message.guild.channels.create(voiceChannelArray[1], {
            type: 'GUILD_VOICE'
        })
        .then(channel => {
        let category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        if (!category) throw new Error('Category does not exist.');
        channel.setParent(category.id);
        }).catch(console.error);

        message.guild.channels.create(voiceChannelArray[2], {
            type: 'GUILD_VOICE'
        })
        .then(channel => {
        let category = message.guild.channels.cache.find(c => c.name == 'STUDY SESSION' && c.type == 'GUILD_CATEGORY');
        if (!category) throw new Error('Category does not exist.');
        channel.setParent(category.id);
        }).catch(console.error);
        
        message.reply("A study session is now available.");
        }
    }
}
