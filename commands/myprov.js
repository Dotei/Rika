const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      const sayMessage = args.join(" ");
  let ballembed = new Discord.RichEmbed()
  .setColor("#6A5ACD")
  .setTitle(`${message.author.tag} a partagé le proverbe ${sayMessage}`)
  .setImage("https://www.pixelstalk.net/wp-content/uploads/2016/01/Cool-Anime-HD-Wallpapers-Free-download-620x349.jpg")


  message.channel.send(ballembed);

}

module.exports.help = {
  name: "myprov"
}
