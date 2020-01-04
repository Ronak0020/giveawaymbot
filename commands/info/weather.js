const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: "weather",
	aliases: ["weather"],
	category: "info",
	description: "Check the weather of your city.",
	usage: "<city name>",
	run: async (client, message, args) => {
		let apiKey = process.env.weatherapi;
let arg = message.content.split(' ').join(' ').slice(9);
if (!arg) {
	return message.reply('I need a city to check :wink:');
	} fetch(`http://api.openweathermap.org/data/2.5/weather?q=${arg}&APPID=889f87d2b8bb69357fc4c2a9d58ae045&units=metric`)
	.then(res => {
		return res.json();
		}).then(json => {
			if(json.main === undefined) {
				return message.reply(`**${arg}** Is not inside my query, please check again`);
				}
				let rise = json.sys.sunrise;
				let date = new Date(rise * 1000);
			 let timestr = date.toLocaleTimeString();
			 let set = json.sys.sunset;
			 let setdate = new Date(set * 1000);
			 let timesstr = setdate.toLocaleTimeString();
			 const embed = new Discord.RichEmbed()
			 .setColor(26368)
                         .setTimestamp()
                         .setFooter(message.author.username, message.author.displayAvatarURL)
			 .setTitle(`This is the weather for :flag_${json.sys.country.toLowerCase()}: **${json.name}**`)
			 .addField('Information:', `**Temp:** ${json.main.temp}°C\n**Wind speed:** ${json.wind.speed}m/s\n**Humidity:** ${json.main.humidity}%\n**Sunrise:** ${timestr}\n**Sunset:** ${timesstr}`);
message.channel.send({embed})
.catch(console.error);
}).catch(err => {
	if (err) {
		message.channel.send('Something went wrong while checking the query! Please try again!');
		}
		});
	}
}
