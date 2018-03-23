const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready",() => {
  console.log("I'm ready bro");
});

var prefix = "!";
var msgContents;
var swears = ["fuck", "shit", "dammit", "damn", "bitch", "ech"];
var theList = [];
client.on('message', msg => {
  if (msg.content.startsWith(prefix)){
   switch(msgContents){
     case "!ping":
       msg.channel.send("Pong")
     break;
  
       
       
       
       
       
       
    
       
       
   }//end of switch
    
  }//end of prefix if
});

client.login(settings.token);
