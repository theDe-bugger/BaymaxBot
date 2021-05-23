const Discord = require ('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const command = require('./command');

const PREFIX = '!';
const { Client, MessageAttachment} = require('discord.js');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
require('events').EventEmitter.defaultMaxListeners = 20;

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
    Please look at the commands and resources below, they may help you. DID THIS HELP? React with 👍 or 👎`,
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

const listOfCommands = {
    color: '#adf1ff',
    title: 'Commands',
    author: {
        name: 'Mental Health Bot',
        icon_url: 'http://clipart-library.com/data_images/134143.gif'
    },
    fields: [
        {
            name: 'Canadian',
            value: `!Ontario
            !Quebec
            !Nova Scotia
            !New Brunswick
            !Manitoba
            !British Columbia
            !Prince Edward Island
            !Saskatchewan
            !Alberta
            !Newfoundland and Labrador
            !Northwest Territories
            !Yukon
            !Nunavut`,
        },
        {
            name: 'United States',
            value: '!US',
        },
        {
            name: 'Other Commands',
            value: `!Hi
            !gif`,
        }
        
    ]
};

// on ready function + all hard coded commands
client.on('ready',() => {
    console.log('client is ready!')

    // List of commands
    command(client, 'commands', message => {
        message.channel.send({ embed: listOfCommands })
    })

    command(client, 'Ontario', message => {
        message.channel.send('Mental Health Helpline. Call 1-866-531-2600.')
    })

    command(client, 'Quebec', message => {
        message.channel.send('Mental Health. Visit http://sante.gouv.qc.ca/en/problemes-de-sante/sante-mentale to learn more.')
    })

    command(client, 'Nova Scotia', message => {
        message.channel.send('Crisis Text Line is available for adults who are going through a difficult time and need someone to text with: https://www.crisistextline.org/')
    })

    command(client, 'New Brunswick', message => {
        message.channel.send('Suicide Prevention CHIMO Helpline. Visit http://www2.gnb.ca/content/gnb/en/departments/health/Suicide_Prevention.html or call 1-800-667-5005.')
    })

    command(client, 'Manitoba', message => {
        message.channel.send('Call the Manitoba Suicide Prevention & Support Line at 1-877-435-7170')
    })

    command(client, 'British Columbia', message => {
        message.author.send('BC Mental Health and Substance Use Services. Call 310-6789 (310 Mental Health) or visit www.bcmhsus.ca.')
    })

    command(client, 'Prince Edward Island', message => {
        message.channel.send('The Island Helpline provides free, confidential emotional support and crisis intervention to Islanders of all ages: 1-800-218-2885.')
    })

    command(client, 'Saskatchewan', message => {
        message.channel.send('Mental Health and Addiction Services. Go to www.saskatchewan.ca/residents/health/accessing-health-care-services/mental-health-and-addictions-support-services for a list of local mental health and addictions services.')
    })

    command(client, 'Alberta', message => {
        message.channel.send('Mental Health Helpline. Call 1-877-303-2642')
    })

    command(client, 'Newfoundland and Labrador', message => {
        message.channel.send('If you are having a mental health crisis please contact the Mental Health Crisis Line at (709) 737-4668 or toll free 1-888-737-4668')
    })

    command(client, 'Northwest Territories', message => {
        message.channel.send('The NWT Help Line offers free support to residents of the Northwest Territories, 24 hours a day, 7 days a week: 1-800-661-0844.')
    })

    command(client, 'Yukon', message => {
        message.channel.send('Kids Help Phone: 1-800-668-6868 (toll free), Yukon Distress and Support Line: 1-800-563-0808')
    })

    command(client, 'Nunavut', message => {
        message.channel.send('Local Nunavut Phone Number: 867.979.3333 or Toll Free Outside of Iqaluit and residents of Nunavumiut: 1.800.265.3333')
    })

    command(client, 'US', message => {
        message.channel.send('The National Suicide Prevention Lifeline: 1-800-273-8255')
    })

    // Hello message
    command(client, 'Hi', message => {
        message.channel.send('Hey, I am Beymax, happy to help!')
    })

    // gifs command
    command(client, 'gif', message => {
        message.channel.send('``` Links to mental health resources: ```')
    })

    command(client, 'pingadmins', message => {
        const the_channel = message.guild.channels.cache.find(varChannel => varChannel.name === 'baymax-bot-notifs');
        the_channel.send('ayyy lets go');
    });
})

const suicidalWords = ["I want to die", "I wanna die", "I actually want to die", "I actually wanna die", 
    "I cant't do this", "I actually want to die rn", "I actually wanna die rn",
    "I cant do this", "kill myself", "kms", "end my life", "I dont want to wakeup",
    "goodbye world", "I dont want to live", "I never want to wake up", "this is the end",
    "I dont want to be alive"];
const stressfulWords= ["stressed", "too much work", "too busy", "no time", "everything sucks",
    "I hate everything", "I have so much", "I have so much to do", "I have no time",
    "I will never get this done"];

const gifs = [
    'https://i.imgur.com/P4415fF.gif', //penguin
    'https://i.imgur.com/HLSQLQ2.gif', //ghost
    'https://i.imgur.com/bkhs8qE.jpeg', //panda
    'https://i.imgur.com/xvE2pyy.jpeg', //chick
    'https://64.media.tumblr.com/65c8e5abcf8690a94519a781077687fd/tumblr_p2wag5u61k1qc4uvwo1_500.gifv', //multiple
    'https://64.media.tumblr.com/4ebe8e53e9de517ca556b397aaa4a4be/377d106051e4ed6b-b3/s500x750/bae3ccb1c2c5b5d5824863d18bf9c68782eca3b4.jpg', //turtle
    'https://64.media.tumblr.com/cc07f3a8a8ff087a739a0ccd4d9f254c/d4f9b40f1be7a526-ea/s500x750/67e6f2d418356e3239afb1c4bf822ba29c57f7a5.jpg', //chicksun
    'https://64.media.tumblr.com/70fdcd63f1650278205782fc83fb9e4a/08c943f81ee2c4c4-d2/s500x750/deac6ba0a3320fa4a8db4b9ef2e8f83df2811af4.jpg'
    ];

let timecheck = new Date(2003, 05, 05);
let msgId = [];
let counter = 0;
let msgId2 = [];
client.on('message', message => {
// this is run every time a new message is sent to chat
let suicidalWordFound = false;
let stressfulWordFound = false;

    for (let i = 0 ; i < suicidalWords.length ; i++){
        if (message.content.toLowerCase().includes(suicidalWords[i].toLowerCase())){
            console.log("it has a sad word");
            // if a suicidal word is found
            suicidalWordFound = true;

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
                stressfulWordFound = true;
                message.author.send({ embed: stressedMessageDM }).then(message => {
                    msgId2.push(message.id);
                    message.react("👍");
                    message.react("👎");
                });
                break; // if one word is found then exit after, dont keep looping
            }
        }
    }

    if (stressfulWordFound || suicidalWordFound) {

        let minelapsed = (message.createdAt.getTime()-timecheck.getTime())/(1000*60);
        console.log(minelapsed);
        console.log(counter);
        if (minelapsed>=60){
            counter = 0;
        }else{
            counter+=1;
        }
        timecheck = message.createdAt;
    }

    if (counter>=3) {
        const gif = gifs[Math.floor(Math.random() * gifs.length)];
        const newEmbed = new Discord.MessageEmbed()
        .setImage(gif)
        .setTitle('hello')
        .setColor('#304281');

        message.channel.send(newEmbed); 
    }
    let args = message.content.substring(PREFIX.length).split(/\s+/);

    switch(args[0]){
        case 'send':
            const gif = gifs[Math.floor(Math.random() * gifs.length)];
            const newEmbed = new Discord.MessageEmbed()
            .setImage(gif)
            .setTitle('hello')
            .setColor('#304281');

            message.channel.send(newEmbed);

        break;
    }
});



client.on('messageReactionAdd', (reaction, user) => {
    if(user.id !== client.user.id) {
        if(reaction.message.id === msgId[0] && reaction.emoji.name == "👍") {
            user.send(`I'm glad I could help! \nPlease utilize the links above, along with other resources by typing !command`);
        } else if(reaction.message.id === msgId[0] && reaction.emoji.name == "👎") {
            user.send("Sorry for the inconvenience, but always remember you are wanted and loved ❤️");
        }
        if(reaction.message.id === msgId2[0] && reaction.emoji.name == "👍") {
            user.send(`I'm glad I could help! \nPlease utilize the links above, along with other resources by typing !command`);
        } else if(reaction.message.id === msgId2[0] && reaction.emoji.name == "👎") {
            user.send("Sorry for the inconvenience, but always remember you are wanted and loved ❤️");
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