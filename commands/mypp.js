const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ballembed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle(`Quelle magnifique photo de profil ${message.author.tag} `)
  .setImage(message.author.avatarURL)


  message.channel.send(ballembed);

}

module.exports.help = {
  name: "mypp"
}