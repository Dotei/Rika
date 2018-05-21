const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    const msg = await message.channel.send("Pinging...");
    await msg.edit(`🎉 Pong! (Took: ${msg.createdTimestamp - message.createdTimestamp}ms.) 🎉`);

}

module.exports.help = {
  name: "ping"
}
