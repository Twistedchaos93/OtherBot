const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready",() => {
  console.log("I'm ready bro");
});

var prefix = "!";
var msgContents;
var playerList = [];
var playerMoney = [];
client.on('message', msg => {
  if (msg.content.startsWith(prefix)){
   switch(msgContents){
     case "!ping":
       msg.channel.send("Pong")
     break;
     case "!enter":       
       if (playerList[msg.author.username] != true){
       playerMoney = [msg.author.username] = 0.0;
       }
       playerList[msg.author.username] = true;
       msg.channel.send(`You have joined! Balance ${playerMoney[msg.author.username}`)
     break;
     //case "!
       
       
       
       
       
       
    
       
       
   }//end of switch
    
  }//end of prefix if
});

client.login(settings.token);
