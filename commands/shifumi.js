const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    	var result = Math.floor((Math.random() * 3) + 1);
    	message.reply(" ** :clap: SHI :scissors: FU :punch: MI ** ");
    	if (result == 1) {
    		  let ballembed = new Discord.RichEmbed()
  .setColor("#6A5ACD")
  .setTitle(` :scissors: **Ciseaux** :scissors:`)
  .setImage("https://naruto-shippuuden.ru/_ph/103/288005475.gif");
    message.channel.send(ballembed);

    	} else if (result == 2) {
    		    		  let ballembed = new Discord.RichEmbed()
  .setColor("#6A5ACD")
  .setTitle(` :clap: **Papier** :clap:`)
  .setImage("https://naruto-shippuuden.ru/_ph/103/288005475.gif")
    message.channel.send(ballembed);
   	 	} else if (result == 3) {
     	let ballembed = new Discord.RichEmbed()
    		.setColor("#6A5ACD")
  			.setTitle(`:punch: **Pierre** :punch:`)
 			.setImage("https://naruto-shippuuden.ru/_ph/103/288005475.gif");
 			  message.channel.send(ballembed);
   }
}

module.exports.help = {
  name: "shifumi"
}
