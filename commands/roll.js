const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  		var result = Math.floor((Math.random() * 100) + 1);
  		message.reply("Vous avez obtenu: " + result);
    }

module.exports.help = {
  name: "roll"
}