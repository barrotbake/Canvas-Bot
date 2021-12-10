module.exports = {
    name: 'help',
    execute(message, args, Discord){
        const { MessageAttachment, MessageEmbed } = require('discord.js');
        const file = new MessageAttachment('./Source/Canvas-Bot-Avatar.png');
        const exampleEmbed = new MessageEmbed()
	      .setColor('#FF5353')
	      .setTitle('Canvas Bot')
        .setDescription('**Commands:**')
	      .setThumbnail('attachment://Canvas-Bot-Avatar.png')
        .addFields(
            { name: 'Join', value: 'Use the `!join` command to register your class to the server.'},
            { name: 'Zoom', value: 'Use the `!zoom` command to get the course zoom link.', inline: true },
            { name: 'Files', value: 'Use the `!files` command to see the course files information.', inline: true },
            { name: 'Announcements', value: 'Use the `!announcements` command to get the most recent course announcments.', inline: true },
            { name: 'Assignments', value: 'Use the `!assignments` command to get the course assignments.', inline: true },
            { name: 'Discussions', value: 'Use the `!discussions` command to get the course discussions.', inline: true },
            { name: 'Study Session', value: 'Use the `!studysession` command to start a study session.', inline: true },
            { name: 'End Session', value: 'Use the `!endsession` command to end a session.', inline: true },
        )
        .setTimestamp()
        .setFooter('Canvas Bot', 'attachment://Canvas-Bot-Avatar.png');
        message.channel.send({ embeds: [exampleEmbed], files: [file] });
    }
}
