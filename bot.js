const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("577525798995755027")
setInterval(function() {
channel.send(`slam alikom nikk arbk haho zb moso ida nta rajel mok nikhalk a3tt`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
