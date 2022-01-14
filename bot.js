const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Buraya Karşı Tarafın Yazacağı Komut gelmeli') {
    msg.reply('Buraya Komuta Karşılık Olarak Botun Vereceği Cevap gelmeli');
  }
});

client.login('Buraya Discord Botunuzun Tokeni Gelmeli');