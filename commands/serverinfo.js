const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Info serveur")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Rejoin le", message.member.joinedAt)
    .addField("Nombre de membres", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
