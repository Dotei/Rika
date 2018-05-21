const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		message.reply("Pile");
    	} else if (result == 2) {
    		message.reply("face");
    	}
   }

module.exports.help = {
  name: "flipcoin"
}
