const Discord = require("discord.js");
const giveaways = require("discord-giveaways");

module.exports = {
    name: "reroll",
    aliases: ["greroll", "giveawayreroll", "gnewwin"],
    category: "giveaways",
    description: "Need to change the previous winner of a giveaway? Use me!",
    usage: "<message ID>",
    run: async (client, message, args) => {
        if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.reply('You do not have permission to start/manage a giveaway!');
        let messageID = args[0];
        giveaways.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
    }