const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ballembed = new Discord.RichEmbed()
  .setColor("#F8EB03")
  .setTitle("Invite moi, et rejoint la TEAM ")
  .setDescription(` [Appuie pour m'inviter](https://discordapp.com/oauth2/authorize?client_id=438796687725690889&scope=bot&permissions=2146958591)`)
  .setImage("http://78.media.tumblr.com/68f3c3b9f01efa3514e45857e97d8ea2/tumblr_mryldvxOoh1sv9dq6o1_500.gif ")

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "inv"
}