const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("sorry tu ne peux pas faire ça.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Impossible de trouver l'utilisateur.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specifier le role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Impossible de trouver le role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Il a deja ce role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, vous avez perdu le role ${gRole.name}.`)
  }catch(e){
    message.channel.send(`Rip à <@${rMember.id}>,Il a perdu le role ${gRole.name}. Nous avons essayer de le contacter mais il semblerait que ce dernier a ses MP bloqué.`)
  }
}

module.exports.help = {
  name: "removerole"
}
