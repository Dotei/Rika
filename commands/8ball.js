const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("Merci de poser un question!");
  let replies = [" :8ball: Yep", " :8ball: Nani?!", " :8ball: Je pense que non", " :8ball: Je m'en fou", " :8ball: Bien sur"]

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .addField("Reponse", replies[result]);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
