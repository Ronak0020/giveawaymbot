const Disord = require('discord.js');

module.exports = {
	name: "8ball",
	aliases: ["8ball", "8b"],
	category: "games",
	description: "Want an answer for your question in yes/no? try this command!",
	usage: "<question>",
	run: async (client, message, args) => {
		var fortunes = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'No way.',
            'Maybe',
            'The answer is hiding inside you',
            'No.',
            'Hang on',
            'It\'s over',
            'It\'s just the beginning',
            'Good Luck',
            ];
		let question = message.content.split(' ').slice(1).join(' ');
if (!question) { return message.reply('What question should I answer on?\n\Use `_help 8ball` for more information');
}
message.channel.send({embed: {
	color: 3447003,
	author: {
		name: `8ball`,
		icon_url: 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png'
},
fields: [{
	name: 'Info:',
	value: `**My answer:** ${fortunes[~~(Math.random() * fortunes.length)]}`
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
