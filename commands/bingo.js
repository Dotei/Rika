const Discord = require("discord.js");

exports.run = function(client, message){
    let y = Math.floor(Math.random() * (Math.floor(75) - Math.ceil(1) + 1)) + Math.ceil(1);
    let x = null;

    if (y < 15){ x = "B"; } 
    else if (y > 15 && y < 30){ x = "I"; } 
    else if (y > 30 && y < 45){ x = "N"; } 
    else if (y > 45 && y < 60){ x = "G"; } 
    else { x = "O"; }

    message.channel.send(x + y);
};
    
module.exports.help = {
  name: "bingo"
}
