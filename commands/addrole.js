const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Spécifiez un rôle!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Impossible de trouver ce rôle.");

  if (rMember.roles.has(gRole.id)) return message.reply("Il a déjà ce rôle.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Félicitations, vous avez reçu le rôle ${gRole.name}`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Félicitations à <@${rMember.id}>, il a reçu le rôle ${gRole.name}. Nous avons essayé de le MP, mais cela n'a pas fonctionné.`)
  }
}
module.exports.help = {
  name: "addrole"
}
