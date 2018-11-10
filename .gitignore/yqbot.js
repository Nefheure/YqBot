const Discord = require('discord.js');

const prefix = "-";

var bot = new Discord.Client();


bot.on("ready", function()  {
    console.log("Yqbot Opperationnel !");
    bot.user.setActivity("-aide")
    bot.user.setStatus("online")

});

bot.on('message', message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle("Commande **aide**")
          .setDescription("Vous permet de Vous aider dans mes commande.")
          .addField("-aide", "Vous Montre le Stockage de command.")
          .addField("-youtube", "Vous envoie un lien vers la chaine youtube de MrYqoshhFX")
          .addField("-instagram", "Vous envoie un lien ver l'instagram de MrYqoshhFX.")
          .setFooter("YqBot, par Neferr.")
          message.channel.sendMessage(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "youtube"){
        var ytb_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici la Chaine Youtube de **YqoshhFX** dans le lien ci-dessous")
        .addField("*lien :*", "https://www.youtube.com/channel/UCEswwt_xabebAcvuiwGdgrA")
        .setFooter("YqBot, par Neferr.")
        message.channel.sendMessage(ytb_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "instagram"){
        var insta_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici l'Instagram de **YqoshhFX** tu peut le REjoindre avec le lien c-dessous")
        .addField("*lien*", "https://instagram.com/yqoshhfx?utm_source=ig_profile_share&igshid=24fyxnfuqm2u")
        .setFooter("YqBot, par Neferr.")
        message.channel.sendMessage(insta_embed);
    }
});
bot.login(process.env.TOKEN);
