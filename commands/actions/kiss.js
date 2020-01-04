const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "kiss",
	category: "actions",
	description: "kiss someone! (◕દ◕)",
        usage: "<user mention whom you wanna kiss>",
	run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username;
      if(!user) return message.reply("Please mention a person whom you wanna kiss! (◕દ◕)").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/kiss')).json();
      if (!(data || data.url)) return message.reply('NO_DATA').then(m => m.delete(5000));
      const hugie = new Discord.RichEmbed()
          .setTitle(`**${user}** has been kissed by **${author}** (◕દ◕)`, true)
          .setImage(data.url)
          .setColor(0xCCFAAF)
           message.channel.send(hugie);
    } catch (error) {
      console.log(error);
      return message.reply('Please mention a person whom you wanna kiss! (◕દ◕)').then(m => m.delete(5000));
    }
		}
	}
