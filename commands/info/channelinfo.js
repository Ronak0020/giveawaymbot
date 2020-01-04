const Discord = require('discord.js');
const channelTypes = {
    dm: 'DM',
    group: 'Group DM',
    text: 'Text Channel',
    voice: 'Voice Channel',
    category: 'Category',
    unknown: 'Unknown',
};

module.exports = {
    name: 'channel',
    category: 'info',
    aliases: ['channelinfo', 'chinfo'],
    usage: "<channel name or channel mention>",
    description: "Get info about a particular channel of a server!",
    run: async (client, message, args) => {
        const channeli = message.mentions.channels.first() || message.channel; 

        if (!channeli) {
            return message.reply('please enter a valid channel.');
        }
       
        const channelEmbed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Channel Info')
                .addField(':arrow_right: Name', channeli.type === 'dm' ? `<@${channeli.recipient.username}>` : channeli.name, true)
                .addField(':arrow_right: ID', channeli.id, true)
                .addField(':arrow_right: Creation Date', channeli.createdAt.toDateString(), true)
                .addField(':arrow_right: NSFW', channeli.nsfw ? 'Yes' : 'No', true)
                .addField(':arrow_right: Category', channeli.parent ? channeli.parent.name : 'None', true)
                .addField(':arrow_right: Type', channelTypes[channeli.type], true)
                .addField(':arrow_right: Topic', channeli.topic || 'None', true)
                .setFooter(message.author.username, message.author.displayAvatarURL)
                .setTimestamp()

        message.channel.send(channelEmbed);
    }
}
