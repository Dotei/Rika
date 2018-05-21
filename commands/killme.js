const Discord = require("discord.js");

exports.run = function(client, message) {
    message.channel.send(`${message.author.username} est mort.`).then(Message => {
        setTimeout(() => { Message.edit("**Resurrection...**"); }, 1000);
        setTimeout(() => { Message.edit(`**Resurrection terminé. Nous saluons le retour de ${message.author.username}**`); }, 1000);
    });
};

    
module.exports.help = {
  name: "killme"
}