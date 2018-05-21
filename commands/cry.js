const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = [" http://i.imgur.com/qZWhIOw.gif", "http://i.imgur.com/0kdQ38I.gif", "http://i.imgur.com/LbpaJMG.gif", "https://cdn.weeb.sh/images/ByPGQIQwb.gif", "https://cdn.weeb.sh/images/rJUujgJ5Z.gif"]

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setTitle(`${message.author.tag} est triste`)
  .setImage(replies[result])


  message.channel.send(ballembed);

}

module.exports.help = {
  name: "cry"
}