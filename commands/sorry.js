const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setTitle(`${message.author.tag} s'excuse`)
  .setImage("https://cdn.weeb.sh/images/HJZX78Xw-.gif")


  message.channel.send(ballembed);

}

module.exports.help = {
  name: "sorry"
}