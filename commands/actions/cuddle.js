const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "cuddle",
	category: "actions",
    description: "Cuddle someone!",
        usage: "<user mention whom you are saying BAKA>",
	run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username;
      if(!user) return message.reply("Please mention a person whom you wanna cuddle! ¯\_(ツ)_/¯").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/cuddle')).json();
      if (!(data || data.url)) return message.reply('NO_DATA').then(m => m.delete(5000));
      const cuddlep = new Discord.RichEmbed()
          .setTitle(`**${author}** is cuddling to **${user}**!`, true)
          .setImage(data.url)
          .setColor(0xAACFCA)
           message.channel.send(cuddlep);
    } catch (error) {
      console.log(error);
      return message.reply('Please mention a person whom you wanna cuddle! ¯\_(ツ)_/¯').then(m => m.delete(5000));
    }
		}
	}
