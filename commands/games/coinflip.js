const Discord = require('discord.js');

module.exports = {
	name: "coinflip",
	aliases: ["coinflip", "cf", "flip"],
	category: "games",
	description: "Is it heads? Or its Tails? Let's check it!'",
	run: async (client, message, args) => {
		let answers = [
		'heads',
		'tails'
		];
		message.channel.send({embed: {
			color: 3447003,
			title: "Coinflip:",
			fields: [{
				name: "Result",
				value: `\`${answers[~~(Math.random() * answers.length)]}\`` }], 
timestamp: new Date(),
footer: {
	icon_url: client.user.avatarURL,
	text: "Made by Ron"
	}
	}
	});
	}
}
