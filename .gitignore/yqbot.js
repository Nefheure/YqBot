const Discord = require('discord.js');

const prefix = ">>";

var bot = new Discord.Client();


bot.on("ready", function()  {
    console.log("Yqbot Opperationnel !");
    bot.user.setActivity(">>help")
    bot.user.setStatus("online")

});

bot.on('message', message => {

    if(message.content === prefix + "help"){
        var aide_embed = new Discord.RichEmbed()
          .setColor("#2EFE2E")
          .setTitle("Command panels")
          .setDescription("All orders will be stored here.")
          .addField(">>help", "Show you the control panel.")
          .addField(">>link", "shows you the YouTube channel YqoshhFX.")
          .addField(">>insta", "shows you the instagram of YqoshhFX.")
          .addField(">>pub", "Little pub for Nefer")
          message.channel.send(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "link"){
        message.reply("Here is YqoshhFX YouTube channel: https://www.youtube.com/channel/UCEswwt_xabebAcvuiwGdgrA");
    }

    if(message.content === prefix + "insta"){
       message.reply("Here is his Instagram: https://instagram.com/yqoshhfx?utm_source=ig_profile_share&igshid=24fyxnfuqm2u");
    }

    if(message.content === prefix + "pub"){
        message.channel.send("@everyone Abonnez-vous à Nefer il a crée mon bot ");
    }

});

bot.login(process.env.TOKEN);
