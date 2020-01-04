const Discord = require("discord.js");
const mongoose = require("mongoose");
const dbUrl = process.env.mongodb;

mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

const Money = require("../../models/money.js");

module.exports = {
    name: 'work',
    description: 'Work and earn coins.',
    category: "economy",
    run: async(client, message, args) => {
        let earnedCoins = Math.floor(Math.random() * 69) + 1;
    Money.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, async (err, money) => {
        if(err) console.log(err);
        if(!money) {
            const newMoney = new Money({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: earnedCoins
            });

            await newMoney.save().catch(e => console.log(e));
        } else if(money) {
            money.coins = money.coins + earnedCoins;
            await money.save().catch(e => console.log(e));
        }
    });

    message.reply(`You worked hard and earned ${earnedCoins} coins!`);
    },
};
