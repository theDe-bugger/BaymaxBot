## Inspiration

School is a stressful experience for most students, both in high school and University. Now more than ever, young adults across Canada take to online platforms to talk about the pressure they are dealing with. It’s easy for people to get caught up with their negative thoughts and this can lead to a spiral, though it can be stopped if someone reaches out. Thus, we created the Baymax Bot to help remind users that there is someone to talk to and resources to reach out to. By proactively interacting with you, our bot is there even when you don’t realize you need it.


## What It Does

The Baymax bot actively monitors server chatrooms to detect suicidal or stressed ideation. If a user sends a phrase which matches the bot's ideation, the bot immediately direct messages them with a motivational text, links to resources on why their life matters, and with a list of commands that are specific to their geographical region to provide them with the most assistance.

If the user confirms that Baymax didn’t give a false alarm (by reacting to the Baymax message with a thumbs up) then a message is sent to the admin Baymax bot channel giving a heads up to the admins.

If Baymax tries to direct message a user but their direct messages are closed, then a message is sent to that same channel letting admins know that something might be wrong.

Baymax bot has additional features, such as a ```!gif``` command. When called, the bot will send a randomly generated motivational image to help brighten your day.


## How to Use It

You can install the bot from this link: [link](https://discord.com/api/oauth2/authorize?client_id=845699070739087410&permissions=8&scope=bot)

It will prompt you to select the server to which you want to add the bot. Once the bot has been added (you can verify by seeing it in the user list), run the command ```!init```. If you’re a server admin, you should see that a new category with a channel called ‘baymax-bot-notif’ was created. That’s it!


## How We Built It

We used discord.js, a node.js module, to create the bot. In terms of collaboration, we managed version control with Git, and we used Visual Studio Code for development.

None of us being experienced with discord.js, we watched a lot of Youtube videos and quite a bit of documentation reading was involved too.


## Accomplishments that We’re Proud of

Ensuring that users are safe and comfortable was a priority for us. When a user sends a message in a channel that becomes flagged for suicidal or stressful ideation, the bot will always message them privately.

Configuring responses and notifications so that they worked as expected was quite challenging, but fortunately worked out in the end.

Figuring out a way using Git to collaborate without interference caused by local copies of the bot running on everyone’s laptop.


## Challenges We Ran Into

1. One of the main challenges we faced was trying to simultaneously work and test the bot. Since each team member was implementing different features but running the bot at the same time, we would often interfere with one another's work, causing some bugs in the beginning that took us a while to uncover the reasoning behind.
2. Infinite loops and recursion: When testing the admin notifications, the bot would occasionally flood the channel with infinite loops of gifs and messages, caused by multiple local copies running on everyone’s laptops as well as general code bugs.
3. Reactions not working: The bot sends an embedded message with reactions to a user’s DM. It was challenging to retrieve when and how the user reacts to the message, as well as to reply back in the same private channel.
4. Gifs not embedded: GIFs would not load and were not embedded. It was challenging because we had to inspect element and take the link from the HTML directly for it to load.
5. Terminal Crashes: While collaborating and sharing code, there were many points where team members would run into errors within the terminal, halting us from pulling and pushing code. This affected our pacing and project timeline, however, in the end the issues were resolved


## What We Learned

For two of our group members, this was our first ever hackathon experience. We learned how to properly communicate with our team members in a short amount of time, how to share ideas and brainstorm with one another, and how to simultaneously work on code chunks together. 

We also had lots of fun learning how to use discord.js to create a bot that can interact with users.


## What’s Next for BaymaxBot

Currently, Baymax Bot only detects suicidal and stressful ideation in English. As the bot grows and is used in more servers where English is not a first language, Baybax Bot will need to support these phrases so that every individual can utilize its services. 

Also, implementing NLP machine learning would be really beneficial in the future so that message tracking can be more complex and accurate (for example, using sentiment analysis and figuring out typos).

ALSO: credits to Disney for Character Design + Name
