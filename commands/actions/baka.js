const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "baka",
	category: "actions",
	description: "Call someone a BAKA!",
        usage: "<user mention whom you are saying BAKA>",
	run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username;
      if(!user) return message.reply("Please mention a person whom you are saying BAKA! ¯\_(ツ)_/¯").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/baka')).json();
      if (!(data || data.url)) return message.reply('NO_DATA').then(m => m.delete(5000));
      const bakap = new Discord.RichEmbed()
          .setTitle(`**${author}** is saying **${user}** a BAKA! ಠ_ಠ`, true)
          .setImage(data.url)
          .setColor(0xCAFFCA)
           message.channel.send(bakap);
    } catch (error) {
      console.log(error);
      return message.reply('Please mention a person whom you are saying BAKA! ¯\_(ツ)_/¯').then(m => m.delete(5000));
    }
		}
	}
