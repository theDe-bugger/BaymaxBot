const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
const command = require('./command')


// on ready function + all hard coded commands
client.on('ready',() => {
    console.log('client is ready!')

    // pingpong test
    command(client, 'ping', message => {
        message.channel.send('Pong!')
    })

    // greetings
    command(client, 'hello', message => {
        message.channel.send('Hey, I am Beymax, happy to help!')
    })

    // resources
    command(client, 'resources', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })

    // gifs command
    command(client, 'resources', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })

    // commands list
    command(client, 'resources', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })
})

// added to server -> make a bot channel for anyone with admin perms - om


// listen function for all messages to check for suicidal/sad texts - sam

    // if else with api call to suicidal api - jaimil

        // if else pinging mods in mod channel (custom channel on join) - om 

// listen function for all messages to check for stress/anxiety related to assessments - sam

    // return some help and resources - jaimil

    // a random choice from a list of destressing activities - sam

    // a random choice from a list of destressing gifs - anna

    // pinging mods in mod channel if it gets bad? - om


// based on what time of year it is or the general situation  - anna

    // automatically send gifs and um help/motivational comments every few minutes - anna

    // ping mod - om

client.login(config.token)