const Discord = require('discord.js');

module.exports = {
    name: 'zodiac',
    description: 'Wanna know what\'s your zodiac symbol? Try this command!',
    usage: "<birth month> <birth date>",
    category: "fun",
    run: async(client, message, args) => {
        const month = parseInt(args[0]);
        const day = parseInt(args[1]);

        if (!month) {
            return message.reply(' please enter a valid number for month.');
        }

        if (month < 1 || month > 12) {
            return message.reply(' please enter a valid month [1, 12].');
        }

        if (!day) {
            return message.reply(' please enter a valid number for day.');
        }

        if (month === 1) {
			if (day >= 1 && day <= 19) return message.reply(' your zodiac is **Capricorn** :capricorn:');
			if (day >= 20 && day <= 31) return message.reply(' your zodiac is **Aquarius** :aquarius:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 2) {
			if (day >= 1 && day <= 18) return message.reply(' your zodiac is **Aquarius** :aquarius:');
			if (day >= 19 && day <= 29) return message.reply(' your zodiac is **Pisces** :pisces:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 3) {
			if (day >= 1 && day <= 20) return message.reply(' your zodiac is **Pisces** :pisces:');
			if (day >= 21 && day <= 31) return message.reply(' your zodiac is **Aries** :aries:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 4) {
			if (day >= 1 && day <= 19) return message.reply(' your zodiac is **Aries** :aries:');
			if (day >= 20 && day <= 31) return message.reply(' your zodiac is **Taurus** :taurus:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 5) {
			if (day >= 1 && day <= 20) return message.reply(' your zodiac is **Taurus** :taurus:');
			if (day >= 21 && day <= 31) return message.reply(' your zodiac is **Gemini** :gemini:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 6) {
			if (day >= 1 && day <= 20) return message.reply(' your zodiac is **Gemini** :gemini:');
			if (day >= 21 && day <= 31) return message.reply(' your zodiac is **Cancer** :cancer:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 7) {
			if (day >= 1 && day <= 22) return message.reply(' your zodiac is **Cancer** :cancer:');
			if (day >= 23 && day <= 31) return message.reply(' your zodiac is **Leo** :leo:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 8) {
			if (day >= 1 && day <= 22) return message.reply(' your zodiac is **Leo** :leo:');
			if (day >= 23 && day <= 31) return message.reply(' your zodiac is **Virgo** :virgo:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 9) {
			if (day >= 1 && day <= 22) return message.reply(' your zodiac is **Virgo** :virgo:');
			if (day >= 23 && day <= 31) return message.reply(' your zodiac is **Libra** :libra:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 10) {
			if (day >= 1 && day <= 22) return message.reply(' your zodiac is **Libra** :libra:');
			if (day >= 23 && day <= 31) return message.reply(' your zodiac is **Scorpio** :scorpio:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 11) {
			if (day >= 1 && day <= 21) return message.reply(' your zodiac is **Scorpio** :scorpio:');
			if (day >= 22 && day <= 31) return message.reply(' your zodiac is **Sagittarius** :sagittarius:');
			return message.reply(' please enter a valid date.');;
        } 
        else if (month === 12) {
			if (day >= 1 && day <= 21) return message.reply(' your zodiac is **Sagittarius** :sagittarius:');
			if (day >= 22 && day <= 31) return message.reply(' your zodiac is **Capricorn** :capricorn:');
			return message.reply(' please enter a valid date.');;
        } 
        else {
			return message.reply(' please enter a valid date.');;
		}
    }
}
