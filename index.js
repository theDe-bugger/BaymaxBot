const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
const command = require('./command')

//TODO: when the bot is added and when new ppl join the server, send dm's to everyone letting them know
// that they can ask for help with !sendHelp or whatever

// added to server -> make a bot channel for anyone with admin perms - om
client.once('message', () => {
    command(client, 'init', message => {
        message.guild.channels.create('Baymax Bot', {
            type: 'category',
            position: 1,
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: message.guild.roles.highest,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                }
            ]
        }).then(category => {
            message.guild.channels.create('baymax-bot-notifs', {
                type: 'text',
                parent: category,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: message.guild.roles.highest,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    }
                ]
            });
        }).catch(error => {
            console.log(error);
        });
    });
});

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
    Please look at the commands and resources below, they may help you. 
    If you found this message helpful or not, please react with 👍 or 👎`,
    thumbnail: {
        url: 'https://i.ibb.co/ZSWXnSW/Screen-Shot-2021-05-22-at-5-13-56-PM.png',
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

// Message that is first sent to the user 
const stressedMessageDM = {
    color: '#edf5f7',
    title: 'Baymax Has A Message For You',
    author: {
        name: 'Mental Health Bot',
        icon_url: 'http://clipart-library.com/data_images/134143.gif'
    },
    description: `A text you have sent in a server was flagged as containing Stressed Ideation. 
    We know that life can get stressful at times, especially during school 
    Baymax would love if you could take a step back, breathe, and remember that everything will be okay in the end`,
    thumbnail: {
        url: 'https://i.ibb.co/ZSWXnSW/Screen-Shot-2021-05-22-at-5-13-56-PM.png',
    },
    fields: [
        {
            name: '101 Reasons Why It Will All Be Okay',
            value: 'https://www.anniewright.com/101-reasons-will-okay/',
        },
        {
            name: 'A Guide to Burnout',
            value: 'https://www.healthline.com/health/tips-for-identifying-and-preventing-burnout',
        },
        {
            name: '10 Simple Ways to Relieve Stress',
            value: 'https://www.healthline.com/health/10-ways-to-relieve-stress',
        },
        {
            name: '14 Instant Ways to Calm Yourself Down',
            value: 'https://www.everydayhealth.com/columns/therese-borchard-sanity-break/10-quick-ways-to-calm-down/',
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

    command(client, 'pingadmins', message => {
        const channel = message.guild.channels.cache.find(varChannel => varChannel.name === 'baymax-bot-notifs');
        channel.send('ayyy lets go');
    });
})

// listen function for all messages to check for suicidal/sad texts - sam

const suicidalWords = ["I want to die", "I wanna die", "I actually want to die", "I actually wanna die", 
    "I cant't do this", "I actually want to die rn", "I actually wanna die rn",
    "I cant do this", "kill myself", "kms", "end my life",
    "goodbye world"];
const stressfulWords= ["stressed", "too much work", "too busy", "no time", "everything sucks", 
    "I hate everything"];

let msgId = [];
client.on('message', message => {
// this is run every time a new message is sent to chat
let suicidalWordFound = false ;

    for (let i = 0 ; i < suicidalWords.length ; i++){
        console.log("checked " + suicidalWords[i])
        if (message.content.toLowerCase().includes(suicidalWords[i].toLowerCase())){
            console.log("it has a sad word ####################################");
            // if a suicidal word is found
            
            suicidalWordFound = true ;

            try { // we have to try incase their DM's are closed
                message.author.send({ embed: suicidalMessageDM }).then(message => {
                    msgId.push(message.id);
                    message.react("👍");
                    message.react("👎");
                });
            } catch {
                // if their dm is closed tell a mod in the bot channel
                console.log("error")
            }
            break; // if one word is found then exit after, dont keep looping
        }
    }

    if (!suicidalWordFound){
        for (let i = 0 ; i < stressfulWords.length ; i++){
            if (message.content.toLowerCase().includes(stressfulWords[i].toLowerCase())){
                // if a stressed word is found
                message.author.send({ embed: stressedMessageDM });
                break; // if one word is found then exit after, dont keep looping
            }
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if(user.id !== client.user.id) {
        if(reaction.message.id === msgId[0] && reaction.emoji.name == "👍") {
            user.send("yes");
        } else if(reaction.message.id === msgId[0] && reaction.emoji.name == "👎") {
            user.send("no");
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