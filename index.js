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
    command(client, 'hiiiii', message => {
        message.channel.send('Hey, I am Beymax, happy to help!')
    })

    // resources
    command(client, 'res1', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })

    // gifs command
    command(client, 'resources', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })

    // commands list
    command(client, 'idkkkk', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })
})

// added to server -> make a bot channel for anyone with admin perms - om


// listen function for all messages to check for suicidal/sad texts - sam

const suicidalWords = ["I want to die", "I cant't do this", 
    "I cant do this", "kill myself", "kms", "end my life",
    "goodbye world"];
const stressfulWords= ["stressed", "too much work", "too busy", "no time"];

client.on('message', async message => {
// this is run everytime a new message is sent to chat

    for (let i = 0 ; i < suicidalWords.length ; i++){
        if (message.content.toLocaleLowerCase().includes(suicidalWords[i].toLocaleLowerCase())){
            // if a suicidal word is found
        }
        else if (message.content.toLocaleLowerCase().includes(stressfulWords[i].toLocaleLowerCase())){
            // if a stressed word is found
        }
    }
});




    // if it is in the list
    // counter += 1
    // counter > 10
    // check time
    // situationcheck()
    // if else with api call to suicidal api - jaimil
        // dm person and check if no/yes for error - jaimil

            //no: if else pinging mods in mod channel (custom channel on join) - om 
            
            //yes: apologize and send a nice message - jaimil

            //timecheck: timestamp of the sent message, add an hour to it, if person doesnt respond send it
            


// listen function for all messages to check for stress/anxiety related to assessments - sam

    // return some help and resources - jaimil

    // a random choice from a list of destressing activities - sam 

    // a random choice from a list of destressing gifs - anna

    // pinging mods in mod channel if it gets bad? - om


// situationcheckkkkkkkkkkkk() hello
// based on what time of year it is or the general situation  - anna

    // automatically send gifs and um help/motivational comments every few minutes - anna

    // ping mod - om

client.login(config.token)