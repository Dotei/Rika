const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Impossible de trouvé l'utilisateur");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#ff0000")
  .addField("utilisateur signalé", `${rUser} avec ID: ${rUser.id}`)
  .addField("Signalé par", `${message.author} avec ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Date", message.createdAt)
  .addField("Raison", reason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Impossible de trouver le channel")

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);


}

module.exports.help = {
  name: "report"
}
