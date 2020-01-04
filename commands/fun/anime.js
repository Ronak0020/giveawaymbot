const Discord = require('discord.js');
const animesf = require('snekfetch');

module.exports = {
	name: "animeimage",
	aliases: ["animeimg", "imgani"],
	category: "fun",
	description: "Check out some amazing Anime pics!",
	run: async (client, message, args) => {
let res = await animesf.get('http://api.cutegirls.moe/json');
if (res.body.status !== 200) {
return message.channel.send('An error occurred while processing this command. Please try again!');
}
let animepicembed = new Discord.RichEmbed()
.setColor('#f266f9')
.setTitle('Anime Picture')
.setImage(res.body.data.image); message.channel.send(animepicembed);
	}
}
