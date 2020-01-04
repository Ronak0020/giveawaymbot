const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "hug",
	category: "actions",
	description: "Hug someone! :3",
        usage: "<user mention whom you wanna hug>",
	run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username;
      if(!user) return message.reply("Please mention a person whom you wanna hug! :3").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/hug')).json();
      if (!(data || data.url)) return message.reply('NO_DATA').then(m => m.delete(5000));
      const hugie = new Discord.RichEmbed()
          .setTitle(`**${user}** has been hugged by **${author}** (つ≧▽≦)つ`, true)
          .setImage(data.url)
          .setColor(0xFACFCA)
           message.channel.send(hugie);
    } catch (error) {
      console.log(error);
      return message.reply('Please mention a person whom you wanna hug! :3').then(m => m.delete(5000));
    }
		}
	}
