const Discord = require("discord.js");
const cooldowns = new Discord.Collection();

const mongoose = require("mongoose");
let coinCooldown = new Set();
const cooldowns = new Discord.Collection();

const dbUrl = process.env.mongodb;
mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

const Money = require("../models/money.js");

module.exports = {
    run: async (client, message) => {
    if (message.author.bot) return;

    if(message.channel.type === "text") {
        Module.findOne({
            guildID: message.guild.id
        }), async (err, s) => {
            if(!s) {
                const newServer = new Module({
                    guildID: message.guild.id,
                    levelModule: "off",
                    coinModule: "off"
                });
                await newServer.save().catch(e => console.log(e));
                return;
            }

            if(s.coinModule === "on") {
                if(!coinCooldown.has(message.author.id)) {
                    let coinstoadd = Math.floor(Math.random() * 4) + 1;
                    Money.findOne({
                        userID: message.author.id,
                        serverID: message.guild.id
                        }, async (err, money) => {
                            if(err) console.log(err);
                            if(!money) {
                                const newMoney = new Money({
                                    userID: message.author.id,
                                    serverID: message.guild.id,
                                    coins: coinstoadd
                                });
                                await newMoney.save().catch(e => console.log(e));
                            } else if(money) {
                                money.coins = money.coins + coinstoadd;
                                await money.save().catch(e => console.log(e));
                             }
                    });

                    await coinCooldown.add(message.author.id);
                    setTimeout(() => {
                        coinCooldown.delete(message.author.id)
                    }, 30000)
                }
            }
        }
    }
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = command.cooldown;

    if(message.author.id !== '414764511489294347') {
        if (!timestamps.has(message.author.id)) {
            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        } else {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            if(command.cooldownReason) {
                let t = `${timeLeft.toFixed(1)} seconds`;
                return store.cooldown(message, command.cooldown, command.cooldownReason);
            }
                return message.channel.send(`Slow it down buddy. You have to wait ${timeLeft.toFixed(1)} more seconds before using \`${command.name}\` again.`);
            }

            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        }
    }
}
}
