const discord = require('discord.js')



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
  console.log('franchisco dawood bot commands .js')
});




var prefix = "%"






client.login('NDgzNjI4NTEwNjE1OTYxNjEy.DmatNw.yoT_X6-OHMgorXAHeGxogz8l1C8');