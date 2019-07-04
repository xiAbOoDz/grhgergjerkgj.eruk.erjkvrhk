const Discord = require("discord.js");
const client = new Discord.Client();
const Guild = "";
const voiceChannel = "";

client.on("ready", () => {
  console.log("Ready!");
  client.channels.get(voiceChannel).join().then(connection => {
    console.log("Successfully connection.");
    setInterval(() => {
      if(!client.guilds.get(Guild).voiceChannel || client.guilds.get(Guild).voiceChannel && client.guilds.get(Guild).voiceChannelID != voiceChannel) {
        client.channels.get(voiceChannel).join();
      }
    }, 15000);
  });
});

client.login(process.env.TOKEN);
