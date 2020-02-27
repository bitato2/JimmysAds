const Discord = require('discord.js');
const client = new Discord.Client();
var Token = process.env.BOT_TOKEN;
var TimeBetween = 0.166667;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const interval = setInterval(function(){
    client.channels.get("682625693023993869").send(";bc");
  },((TimeBetween*60)*60)*1000);
})
client.login(Token);
