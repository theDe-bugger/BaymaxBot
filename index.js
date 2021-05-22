const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
const command = require('./command')

// Message that is first sent to the user 
const suicidalMessageDM = {
    color: '#edf5f7',
    title: 'Baymax Has A Message For You',
    author: {
        name: 'Mental Health Bot',
        icon_url: 'http://clipart-library.com/data_images/134143.gif'
    },
    description: `A text you have sent in a server was flagged as containing Suicidal Ideation. 
    We care about you, and we want to make sure you're okay!
    Please look at the commands and resources below, they may help you`,
    thumbnail: {
        url: 'https://i.imgur.com/wSTFkRM.png',
    },
    fields: [
        {
            name: 'National Suicide Prevention Lifeline',
            value: 'https://suicidepreventionlifeline.org/',
        },
        {
            name: 'Reasons to Live',
            value: 'https://www.healthline.com/health/mental-health/reasons-to-live#Youre-not-as-alone-as-you-feel',
        },
        {
            name: 'Self-Care Strategies',
            value: 'https://www.healthline.com/health/depression/self-care-for-depression',
        },
        {
            name: 'Type the command below for a list of commands and helpful resources',
            value: '!commands',
        }
    ],
    timestamp: new Date()
};

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

    // Standard motivational message
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

const suicidalWords = ["I want to die", "I wanna die", "I actually want to die", "I actually wanna die", 
    "I cant't do this", "I actually want to die rn", "I actually wanna die rn",
    "I cant do this", "kill myself", "kms", "end my life",
    "goodbye world"];
const stressfulWords= ["stressed", "too much work", "too busy", "no time", "everything sucks", 
    "I hate everything"];


client.on('message', async message => {
// this is run every time a new message is sent to chat
let suicidalWordFound = false ;

    for (let i = 0 ; i < suicidalWords.length ; i++){
        console.log("checked " + suicidalWords[i])
        if (message.content.toLowerCase().includes(suicidalWords[i].toLowerCase())){
            console.log("it has a sad word");
            // if a suicidal word is found
            
            suicidalWordFound = true ;

            try { // we have to try incase their DM's are closed
                message.author.send({ embed: suicidalMessageDM });
            } catch {
                // if their dm is closed tell a mod in the bot channel
            }
            break; // if one word is found then exit after, dont keep looping
        }
    }

    if (!suicidalWordFound){
        for (let i = 0 ; i < stressfulWords.length ; i++){
            if (message.content.toLowerCase().includes(stressfulWords[i].toLowerCase())){
                // if a stressed word is found
    
                break; // if one word is found then exit after, dont keep looping
            }
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