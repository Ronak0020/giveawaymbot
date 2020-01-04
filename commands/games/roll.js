const Discord = require('discord.js');

module.exports = {
	name: "roll",
	aliases: ["roll", "die"],
	description: "Generate a random number!",
	category: "games",
	usage: "[number]",
	run: async (client, message, args) => {
		let rollnumber = message.content.split(' ').slice(1).join(' ');
if (!rollnumber) {
	return message.reply(`:game_die: Just rolled a number: **${Math.floor(Math.random() * 100) + 1}**`);
	}
message.reply(`:game_die: Just rolled a number: **${Math.floor(Math.random() * rollnumber) + 1}**`);
	}
}
