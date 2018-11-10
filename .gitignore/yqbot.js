const Discord = require('discord.js');

const prefix = ">>";

var bot = new Discord.Client();


bot.on("ready", function()  {
    console.log("Yqbot Opperationnel !");
    bot.user.setActivity("Miise aJour...")
    bot.user.setStatus("dnd")

});

bot.on('message', message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
          .setColor("#2EFE2E")
          .setTitle("Visualisation du Stockage des Command...")
          .setDescription("Les Command sont a votre dispotion.")
          .addField(">>help", "Vous Montre le Stockage de command.")
          .addField(">>link", "Vous envoie un lien vers la chaine youtube de MrYqoshhFX")
          .addField(">>insta", "Vous envoie un lien ver l'instagram de MrYqoshhFX.")
          .addField(">>infoyqbot", "Description du bot.")
          .setFooter("YqBot, par Neferr.")
          message.channel.send(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "ytb"){
        message.reply(`tu veut t'abonner ${message.author}? ok fait comme chez toi ! https://www.youtube.com/channel/UCEswwt_xabebAcvuiwGdgrA`);
    }

    if(message.content === prefix + "insta"){
       message.reply(`Voici l'Instagram pour Mr ${message.author}: https://instagram.com/yqoshhfx?utm_source=ig_profile_share&igshid=24fyxnfuqm2u`);
    }

    if(message.content === prefix + "infoyqbot"){
        message.reply("je suis un Bot comunautaire, je suis en parafite connexion avec DogBot les humain appelle sa la fibre , ces a dire que si Dogbot a une command moi je ne l'aurais surement pas mais j'aurais les command qu'il n'as pas , je suis Inventer pour vous aider et vous orienter, sous la responsabiliter de Mon programmer je doit et je ferait tous se qui en mon possible pour evoluer et un jour depasser les plus grand bot tel que Mee6.");
    }

});


bot.on('guildMemberAdd', member => {

    let role = memeber.guild.roles.find("name", "💪|Sub");
    member.guild.channels.find("name", "✅ʙɪᴇɴᴠᴇɴᴜᴇ").send(`${member} a rejoind le serveur !:hugging:`)

    member.addRole(role)
});

bot.on('message', message => {
   if(message.content === prefix + "rep"){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("non.");
    let repmessage = args.join(" ");
    message.channel.send(repmessage);
}});
bot.login(process.env.TOKEN);
