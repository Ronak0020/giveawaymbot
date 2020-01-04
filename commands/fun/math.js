const Discord = require('discord.js');
const math = require('math-expression-evaluator');

module.exports = {
	name: "math",
	aliases: ["math", "calculate"],
	category: "fun",
	description: "Lets do some mathematics!",
	usage: "<problem (eg: _math 48+9)>",
	run: async (client, message, args) => {
let calcArgs = message.content.split(' ').slice(1).join(' ');
if (!calcArgs[0]) {
	message.channel.send({embed: {
		color: 3447003,
		footer: {
			icon_url: client.user.avatarURL,
			text: "Please input an expression."
			}
			}
			});
			}
		let calcResult;
		try {
			calcResult = math.eval(calcArgs);
			} catch (e) {
				calcResult = 'Error: "Invalid Input"';
				}
	message.channel.send({embed: {
		color: 3447003,
		author: {
			name: 'Giveaway Magic\'s calculator',
			icon_url: client.user.avatarURL
			},
			fields: [
			{
				name: "Input",
				value: `\`\`\`js\n${calcArgs}\`\`\``
				},
				{ name: "Output",
				value: `\`\`\`js\n${calcResult}\`\`\``
				}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: "Made by Ron"
					}
					}
					});
	}
}
