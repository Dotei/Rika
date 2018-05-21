const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ballembed = new Discord.RichEmbed()
  .setTitle(" **Bonjour, voici les commandes **")
  .setDescription("Hey tu peux m'inviter sur ton serveur! [Appuie pour m'inviter](https://discordapp.com/oauth2/authorize?client_id=438796687725690889&scope=bot&permissions=2146958591)")
  .setColor("#E8ADAA")
  .addField("**Fun**", " `ping` , `roll` , `flipcoin` , `shifumi`, `killme`, `bingo`, `bravo` ")
  .addField("**Action/Image**", " `meme` , `cry` , `punch` , `myprov` , `ask`, `sorry`, `hellsing`, `jojo` ")
  .addField("**Admin**", "`say` ,`clear` ,`sondage` ,`ban` , `kick`, `report`, `mute`, `addrole`, `removerole`")
  .addField("**Util**", "`botinfo` ,`serverinfo` ,`mypp` ,`ping`, ");



  message.channel.send(ballembed);

}

module.exports.help = {
  name: "help"
}