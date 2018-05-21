const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(message.member.hasPermission("ADMINISTRATOR"))  {
		let args = message.content.split(" ").slice(1);
		let thingToEcho = args.join(" ")
		var embed = new Discord.RichEmbed()
			.setDescription("Sondage")
			.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
			.setColor("0xB40404")
			.setTimestamp()
		message.guild.channels.find("name", "❓sondage").sendEmbed(embed)
		.then(function (message) {
			message.react("✅")
			message.react("❌")
		}).catch(function() {
		});
		
		message.guild.channels.find("name", "sondage").sendEmbed(embed)
		.then(function (message) {
			message.react("✅")
			message.react("❌")
		}).catch(function() {
		});
		}else{
			return message.reply("Tu n'as pas pas la permission")
		}};
module.exports.help = {
  name:"sondage"
}