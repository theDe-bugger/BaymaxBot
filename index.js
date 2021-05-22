const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
const command = require('./command')

client.on('ready',() => {
    console.log('client is ready!')

    command(client, 'ping', message => {
        message.channel.send('Pong!')
    })
    command(client, 'hello', message => {
        message.channel.send('Hey, I am Beymax, happy to help!')
    })
})

client.login(config.token)