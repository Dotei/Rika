const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = ["https://cdn.weeb.sh/images/Hyx2a_Xv-.png", "https://cdn.weeb.sh/images/HyD36OXD-.gif", "https://cdn.weeb.sh/images/Syi36_mwb.png", "https://cdn.weeb.sh/images/rykM3brrM.gif", "https://cdn.weeb.sh/images/HyXz2-BBz.gif"]

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setColor("#008000")
  .setImage(replies[result])


  message.channel.send(ballembed);

}

module.exports.help = {
  name: "jojo"
}