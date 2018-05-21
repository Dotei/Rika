const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = ["https://i.imgur.com/6qxapPa.gif", "https://i.imgur.com/ewlJb7r.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamBnFssUPQzFiwe_CsTNn9ZAOTugaj5ifF-QmeUAj9yJplhRMYQ", "https://i.imgur.com/pLIKY5E.gif", "http://static.hitek.fr/img/actualite/2016/09/29/90d144c119251889319ebc533f7ba0bb.gif"]

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setTitle("Ce n'est pas du Hentai")
  .setColor("#000000")
  .setImage(replies[result]);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "nohentai"
}