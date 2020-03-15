const Discord = require('discord.js');
const client = new Discord.Client();
var Token = process.env.BOT_TOKEN;
var TimeBetween = 0.001;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const interval = setInterval(function(){
    var guildList = client.guilds.array();
    try {
        guildList.forEach(guild => guild.channels.get("name","jimmys-ads-botted").send(";bc"));
    } catch (err) {
        console.log("Could not send message to " + guild.name);
    }
    // client.channels.get("682625693023993869").send(";bc");
  },((TimeBetween*60)*60)*1000);
})
client.login(Token);
