const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = ["http://www.memecenter.fr/files/2015/02/xzibit-yo-dawg-quand-jai-vu-ta-tete-jai-su-que-dieu-avait-le-sens-de-lhumour.jpg", "http://www.memecenter.fr/files/2014/01/success-kid-fait-tomber-mon-nokia-le-carrelage-est-intact.jpg", "https://levraidevrai.files.wordpress.com/2016/06/meme1.png?w=1000", "http://lagauchematuer.fr/wp-content/uploads/2017/10/macron-insulte.jpg", "https://media.fan2.fr/pmedia-3524425-ajust_700/fangirl-en-attente-des-resultats-du-bac-11.jpg", "https://cdn.discordapp.com/attachments/223023909815975936/444511141218222080/29054bfa9d1eea6b6f5a781b8210d65e.png", "http://www.ragecomic.fr/files/tdomf/57304/ragecomic-titans.png", "http://i0.kym-cdn.com/photos/images/newsfeed/001/006/637/fff", "https://img.memecdn.com/welcome-to-csgo_o_7170526.jpg", "https://steamuserimages-a.akamaihd.net/ugc/400086242630037723/2F74CB984561941270698CB111727303EF8774A7/", "https://pbs.twimg.com/media/CbsGeiaWwAAHQMl.jpg", "https://cdn.discordapp.com/attachments/223023909815975936/444490895266414602/pizap.com15260452765431.jpg"]

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setImage(replies[result]);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "meme"
}