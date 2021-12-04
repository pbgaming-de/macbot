const discord = require("discord.js");
const bot = new discord.Client();
const token = "OTE2NjI1MzMwMDYyNjQ3MzA2.Yas33A.6z_DzuLAotpC-IA5noWmQ2mqWoQ"

bot.on("ready", () =>{
    console.log("Bot online.");
    bot.user.setActivity("MAC Bot", {type: "PLAYING"});
})


bot.login(token);