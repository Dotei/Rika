const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  let replies = ["http://imgur.com/o5MoMYi.gif", "https://i.imgur.com/GsMjksq.gif", "https://i.imgur.com/bRWRAcE.gif", "https://pa1.narvii.com/6397/a87128b051685c1f006819269a04db7270fe4d92_hq.gif"]

  let [age] = args; 

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setTitle(`${message.author.tag} donne un coup a ${age}`)
  .setImage(replies[result])

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "punch"
}