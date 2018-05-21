const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = ["https://images4.alphacoders.com/872/87214.jpg", "https://cdn.suwalls.com/wallpapers/anime/alucard-hellsing-5791-400x250.jpg", "https://images.alphacoders.com/858/thumb-1920-858048.jpg", "https://static.zerochan.net/HELLSING.full.543975.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSGFknaLsOWMZ84vmfUEBeQKYYUUuFQAkMEr-VdpDsm3IaWTYuw", "https://i.pinimg.com/236x/af/17/57/af1757c2758a8f47ea54dc832d27bcd3--computer-wallpaper-wallpaper-desktop.jpg"]

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setImage(replies[result])

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "hellsing"
}
