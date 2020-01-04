const Discord = require('discord.js');
const advicesf = require('snekfetch');

module.exports = {
	name: "advice",
	category: "fun",
	description: "Get some usefull advice for yourself! It will help you in future ;)",
	run: async (client, message, args) => {
let r = await advicesf.get('http://api.adviceslip.com/advice');
let advice = JSON.parse(r.body).slip.advice;
message.channel.send({embed: {
	color: 3447003,
	author: {
	name: client.user.username,
	icon_url: client.user.avatarURL },
	fields: [{
		name: "Advice:",
		value: `\`${advice}\``
		}
		],
		timestamp: new Date(),
		footer: { icon_url: client.user.avatarURL,
		text: "Made by Ron"
		}
		}
		});
	}
}
