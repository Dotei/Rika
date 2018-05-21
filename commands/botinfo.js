const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot info")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username)
    .addField("Crée le", bot.user.createdAt)
        .addField("Crée par", "@Lindow 👑#2372 ");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
