const Discord = require('discord.js');
const request = require('superagent');

module.exports = {
    name: 'joke',
    category: 'fun',
    usage: "[Name of person u want to make a joke on]",
    description: 'Make jokes on people',
    run: async (client, message, args) => {
        let firstName = args[0];
        let lastName = args[1];

        if (!firstName) firstName = 'Queen';
        if (!lastName) lastName = 'Elizabeth';

        request.get('http://api.icndb.com/jokes/random')
            .query({escape: 'javascript'})
            .query({firstName: firstName})
            .query({lastName: lastName})
            .end((err, res) => {
                if (!err && res.status === 200) {
                    message.channel.send(res.body.value.joke)
                } else {
                    console.error(`REST call failed: ${err}`)
                }
            });
    }
}
