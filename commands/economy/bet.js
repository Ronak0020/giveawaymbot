const Discord = require("discord.js");
const mongoose = require("mongoose");
const dbUrl = process.env.mongodb;

mongoose.connect(dbUrl, {
    useNewUrlParser: true
});
const Money = require("../../models/money.js");

module.exports = {
    name: 'bet',
	description: 'Bet coins. *Double or nothing.*',
    category: "economy",
    usage: "<ammount>",
	run: async(client, message, args) => {
        if(!args[0]) return message.channel.send("Please specify the amount you wanna bet!");
        let bet = parseInt(args[0]);
        if(!bet || isNaN(bet)) return message.channel.send("Please specify a valid amount of coins to bet.");

        Money.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, async (err, money) => {
            if(!money) return message.channel.send("Seems like you don't have any coins in this server.");
            if(money.coins < bet) return message.channel.send(`You can't bet ${bet.toLocaleString()} coins. You only have ${money.coins.toLocaleString()} coins in this server.`);
            const cm = await message.channel.send("Spinning Wheel...");

            let chance = Math.floor(Math.random() * 100) + 1;

            if(chance < 50) {
                money.coins = money.coins - bet;
                await money.save().catch(e => console.log(e));

                cm.edit(`Damn, you lost ${bet} coins.`);
            }

            if(chance > 50) {
                money.coins = money.coins + bet;
                await money.save().catch(e => console.log(e));
                cm.edit(`Well played, you just won ${bet} coins.`);
            }
        });
    },
};
