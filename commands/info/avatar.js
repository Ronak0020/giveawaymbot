const Discord = require('discord.js');

module.exports = {
	name: "avatar",
	aliases: ["avatar", "av"],
	category: "info",
	description: "Check out user\'s avatar!",
	usage: "<user mention>",
	run: async (client, message, args) => {
		if(message.mentions.users.first()) {
let user = message.mentions.users.first();
let output = user.username + "#" + user.discriminator + "\nAvatar URL: " + user.avatarURL;
message.channel.send(output);
} else {
	message.reply("Please mention someone :thinking:");
	}
	}
}
