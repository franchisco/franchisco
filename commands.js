const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log('franchisco my commands .js')
  });
  
  
  
  

  
  
  // Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === '%hi') {
      // Send "pong" to the same channel
      message.channel.send(':regional_indicator_h: :regional_indicator_i: ');
    }
  });
  
  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'wormax.io') {
      // Send "pong" to the same channel
      message.channel.send('wormax.io go');
    }
  });
  
  
  
  
  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '%avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });



  client.on('message', message => {
    if (message.content === "%ct") {
          client.guilds.forEach(m =>{
  m.createChannel("name")
  })
  }
  });

  
  client.on('message', msg => {
    if (msg.content === '%dog') {
      msg.reply('https://giphy.com/gifs/dog-shiba-inu-typing-mCRJDo24UvJMA ');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === '%cat') {
      msg.reply('https://giphy.com/gifs/JIX9t2j0ZTN9S ');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === '%worm') {
      msg.reply('https://giphy.com/gifs/3d-worm-gif-26BoD64nDXYKHNuj6 ');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === '%wolf') {
      msg.reply('https://giphy.com/gifs/wolf-howling-fa52tjli2wTza ');
    }
  });
  
  
  
  
  client.on('message', msg => {
    if (msg.content === '%frog') {
      msg.reply('https://giphy.com/gifs/frog-peace-on-earth-it-me-happy-time-for-you-l3vR4gFDcYN1Ywmbu ');
    }
  });
  
  
  
  
  
  client.on('message', msg => {
    if (msg.content === '%hi1') {
      msg.reply('https://giphy.com/gifs/dog-miss-Wj7lNjMNDxSmc ');
    }
  });
  
  
  
  
  client.on('message', msg => {
    if (msg.content === '%hi2') {
      msg.reply('https://giphy.com/gifs/bread-L3nWlmgyqCeU8 ');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === '%play') {
      msg.reply('https://giphy.com/gifs/80s-vhs-art-8b29QJQgVwUW4 ');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === '%screem') {
      msg.reply('https://giphy.com/gifs/xU9TT471DTGJq ');
    }
  });
  
  
  
  
  client.on('message', msg => {
    if (msg.content === '%malash') {
      msg.reply('https://giphy.com/gifs/no-cat-nR4L10XlJcSeQ ');
    }
  });
  
  
  client.on('message', msg => {
    if (msg.content === '%yes') {
      msg.reply('https://giphy.com/gifs/daughter-houston-bathtub-hVYVYZZBgF50k ');
    }
  });
  
  
  
  
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.channel.send('pong');
    }
  });
  
  
  
  
  
  
  client.login('NDgzNjI4NTEwNjE1OTYxNjEy.DmatNw.yoT_X6-OHMgorXAHeGxogz8l1C8');