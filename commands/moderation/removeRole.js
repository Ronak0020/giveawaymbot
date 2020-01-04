const Discord = require('discord.js');

module.exports = {
    name: "removeRole",
    aliases: ["removerole", "rr", "takeRole"],
    category: "moderation",
    description: "Remove a role from a user.",
    usage: "<mention> <role name, role mention>",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`**You do not have permission to use this command!**\n Please contact a staff member.`);
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!rMember) return message.reply("Couldn't find that user!");
        let role = args.join(" ").slice(22);
        if(!role) return message.reply("Specify a role!");
        let gRole = message.guild.roles.find(`name`, role);
        if(!gRole) return message.reply("Couldn't find that role.");
      
        if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
        await(rMember.removeRole(gRole.id));
          message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them.`)
        }
    }