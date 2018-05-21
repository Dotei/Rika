const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      const sayMessage = args.join(" ");
  let ballembed = new Discord.RichEmbed()
  .setColor("#6A5ACD")
  .setTitle(`${message.author.tag} demande ${sayMessage}`)
  .setImage("http://s1.favim.com/orig/150828/anime-gif-anime-girl-charlotte-kawaii-Favim.com-3197061.gif")


  message.channel.send(ballembed);

}

module.exports.help = {
  name: "ask"
}