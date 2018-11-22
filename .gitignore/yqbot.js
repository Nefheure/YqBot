const Discord = require('discord.js');

const prefix = "-";

var bot = new Discord.Client();

let statues = ['-aide', 'Par nefer',];

bot.on('ready', () => {
    setInterval(function() {
     let status = statues[Math.floor(Math.random()*statues.length)];
       bot.user.setPresence({ game: { name: status }, status: 'online'});
  }, 1000)
 console.log("Yqbot Opperationnel !"); 
})



bot.on('message', message => {
    if(message.content === prefix + "stats"){

    var userCreateDate = message.author.createdAt.toString().split(" ");
    var msgauthor = message.author.id;
    
     var stats_embed = new Discord.RichEmbed()
      .setAuthor("Statistique Par **Yqbot**", bot.user.avatarURL)
      .setColor("#000000")
      .setDescription("Voici t'es informations sur ton compte")
      .setTitle(`Statistiques pour ${message.author.username}`)
      .addField("tu a cree ton compte au dates suivante", userCreateDate[1] + ' ' + userCreateDate[2] + " " + userCreateDate[3])
      .addField(`ton identifiant et le suivant`, msgauthor, true)
      .setFooter("Versia, created by Nefer")
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      message.reply("tu peut regarder t'es message priver, tu viens de recevoir t'es informations personnel !")
      message.author.send({embed: stats_embed}); 
}});



bot.on('message', message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle("Commande **aide**")
          .setDescription("Vous permet de Vous aider dans mes commande.")
          .addField("``-aide``", "Vous Montre le Stockage de command.")
          .addField("``-youtube``", "Vous envoie un lien vers la chaine youtube de MrYqoshhFX")
          .addField("``-instagram``", "Vous envoie un lien ver l'instagram de MrYqoshhFX.")
          .addField("``-stats``", "vous envoie vos informations personnel en priver")
          .setFooter("YqBot, par Neferr.")
          .setTimestamp()
          message.channel.sendMessage(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "youtube"){
        var ytb_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription("Voici la Chaine Youtube de **YqoshhFX** dans le lien ci-dessous")
        .addField("https://www.youtube.com/channel/UCEswwt_xabebAcvuiwGdgrA")
        .setFooter("YqBot, par Neferr.")
        .setTimestamp()
        message.channel.sendMessage(ytb_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "instagram"){
        var insta_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription("Voici l'Instagram de **YqoshhFX** tu peut le REjoindre avec le lien c-dessous")
        .addField("https://instagram.com/yqoshhfx?utm_source=ig_profile_share&igshid=24fyxnfuqm2u")
        .setFooter("YqBot, par Neferr.")
        .setTimestamp()
        message.channel.sendMessage(insta_embed);
    }
});
bot.login(process.env.TOKEN);
