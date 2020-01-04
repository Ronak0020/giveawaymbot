const Discord = require('discord.js');
const ud = require('urban-dictionary');

module.exports = {
	name: "ud",
	description: "Want meaning of any word? Try searching on Urban!",
	category: "fun",
	usage: "<word>",
	aliases: ["urban", "ud"],
	run: async (client, message, args) => {
		
var definition = args.join(" ");

ud.term(definition, (error, entries, tags, sounds) => {

  if (error) {

    console.error(error.message)

  } else {

    console.log(entries[0].word)

    console.log(entries[0].definition)

    console.log(entries[0].example)

  }

})

ud.term(definition).then((result) => {

  const entries = result.entries

  const UrBan = new Discord.RichEmbed()
.setTitle(`Source: ${entries[0].permalink}`)
	.addField("Word:", entries[0].word)
	.addField("Definition:", entries[0].definition)
	.addField("Example:", entries[0].example)
	.setThumbnail(message.author.displayAvatarURL)
	.setColor(0xFFFAAC)
	.setFooter("👍 " + entries[0].thumbs_up + ' | ' + " 👎 " + entries[0].thumbs_down)
	.setTimestamp()
	message.channel.send(UrBan)

}).catch((error) => {

  message.reply("Error! This word was not found in URBAN dictionary!")

})
	}
}
