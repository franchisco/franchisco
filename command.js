/**
 * An example of how you can send embeds
 */

// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('franchisco help on')
});



client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%help') {
      const embed = new RichEmbed()
      .setTitle('help commands')
      .addField("%admin", "for admin kick and ban commands :angry:")
      .addField("%fun", "for very fun comands :joy:")
      .addField("%animals", "for animals gif")
      .addField("%lifegif", "for life gif")
      .setColor(0xFF0000)
      message.channel.send(embed);
    }
  });

  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%admin') {
      const embed = new RichEmbed()
      .setTitle('admin commands')
      .addField("%kick", "**for kick some one from server**")
      .addField("%ban", "**for ban someone from group**")
      .addField("%ct", "for create a text channel :wow:")
      .addField("%broad", "for broad cast")
      .setColor(0xFF0000)
      message.channel.send(embed);
    }
  });


  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%fun') {
      const embed = new RichEmbed()
      .setTitle('fun comands:joy:')
      .addField("%hi", "for big hi try it")
      .addField("%garo", "for drink segar")
      .addField("%avatar", "for your avatar")
      .addField('%wormax.io')
      .addField("%rip", "for rip photo")
      .setColor(0xFF0000)
      message.channel.send(embed);
    }
  });



  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%support') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('server support')
        // Set the color of the embed
        .setColor(0xFFFFFF)
        // Set the main content of the embed
        .setDescription('https://discord.gg/JdCUN2C');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });



  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%makerinfo') {
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('info')
        // Set the co237lor of the embed
        .setColor(0xFFFFFF)
        // Set the main content of the embed
        .setDescription('name`franchisco` |age `13`| country `egypt`|real name `dawood` ');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

  

  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%animals') {
      const embed = new RichEmbed()
      .setTitle("%cat", "cAT gif")
      .addField("%dog", "for dog gif")
      .addField("%worm", "for worm gif")
      .addField("%wolf", "for wolf gif")
      .addField("%frog", "for frog gif")
      .setColor(0xFF0000)
      message.channel.send(embed);
    }
  });


  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%lifegif') {
      const embed = new RichEmbed()
      .setTitle("%hi1", "hi gif")
      .addField("%hi2", "for hi gif")
      .addField("%play", "for play  gif")
      .addField("%screem", "for scary")
      .addField("%no", "it's not your pesnes")
      .addField("yes", "yes gif")
      .setColor(0xFF0000)
      message.channel.send(embed);
    }
  });

  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'fine') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('ohhhh :smirk:')
        // Set the color of the embed
        .setColor(0xFFFFFF)
        // Set the main content of the embed
        .setDescription('good');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

  
  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'hello') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('welcome :wave:')
        // Set the color of the embed
        .setColor(0xFFFFFF)
        // Set the main content of the embed
        .setDescription('how are you :tada:');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });


  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'hi') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('hello')
        // Set the color of the embed
        .setColor(0xFFFFFF)
        // Set the main content of the embed
        .setDescription('hi :wave:');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });



  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '%makerinfo') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('info')
        .setfiled('name`franchisco` |age `13`| country `egypt`|real name `dawood` ')
        // Set the color of the embed
        .setColor(0xFFFFFF)
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });





  
  client.login('NDgzNjI4NTEwNjE1OTYxNjEy.DmatNw.yoT_X6-OHMgorXAHeGxogz8l1C8');
