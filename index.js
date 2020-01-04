const { Client, Collection, RichEmbed } = require("discord.js");
const fs = require("fs");
const giveaways = require("discord-giveaways");
const Levels = require("discord-xp");
Levels.setURL(process.env.mongodb);

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "_help **||** Developer: Ronak",
            type: "WATCHING"
        }
    });

client.on('guildMemberAdd', async member => {
			const channel = member.guild.channels.find(ch => ch.name === '');
			if(!channel) return;
			const wlcm = new RichEmbed()
            .setTitle(`New Member!`)
            .setDescription(`***${member.user.tag}*** Welcome to __${member.guild.name}__\nHave a Great time here! (≧▽≦)`)
			.setColor(0xFCAFCA)
			.setThumbnail(member.user.displayAvatarURL)
			.addField("Few Important Channel to look on:", "<#632577411338469418>, <#645584771547791390>, <#638764705044889609>, <#639921529416843295>, <#646556472204984340> ")
			.setImage("https://media.tenor.com/images/4a070a74048498dda7b5c5215d420176/tenor.gif")
			.setTimestamp()
			.setFooter(client.user.username, client.user.displayAvatarURL)
			channel.send(`**${member}** has joined **${member.guild.name}!** Let\'s Welcome them!`, wlcm)
        });
    giveaways.launch(client, {
        updateCountdownEvery: 5000,
        botsCanWin: false,
        ignoreIfHasPermission: [
            "MANAGE_MESSAGES",
            "MANAGE_GUILD",
            "ADMINISTRATOR"
        ],
        embedColor: "#07F7FD",
        embedColorEnd: "#FFFFFF",
        reaction: "❄️",
        storage: __dirname + "/giveaways.json"
          });
    });

    client.on("message", async message => {
        if (!message.guild) return;
        if (message.author.bot) return;
        
        const randomAmountOfXp = Math.floor(Math.random() * 15) + 1;
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
        if (hasLeveledUp) {
          const user = await Levels.fetch(message.author.id, message.guild.id);
          message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);
        }
      });

client.on("message", async message => {
    const prefix = '_';

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(process.env.token);
