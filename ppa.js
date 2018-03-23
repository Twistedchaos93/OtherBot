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
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;//can be min but not max
}
//parser
client.on('message', msg => {
  if (msg.content.startsWith(prefix)){
   switch(msgContents){
     case "!ping":
       msg.channel.send("Pong")
     break;
     case "!enter":       
       if (playerList[msg.author.username] != true){
       playerMoney = [msg.author.username] = 5.0;
       }
       playerList[msg.author.username] = true;
       msg.channel.send(`You have joined! Balance ${playerMoney[msg.author.username]}`)
     break;
     case "!reset":
       if (msg.author.username == "FinnRules"){
        playerList = [];
        playerMoney = [];
        msg.channel.send(`All players removed by ${msg.author.username}`)
       } else {
        msg.channel.send(`${msg.author.send} is not recognised as a user who reset privs`)
       }
     break;
     case "!bet1":
       var die1 = random(1,7);
       var die2 = random(1,7);
       msg.channel.send(`Die 1 result: ${die1}\nDie 2 result: ${die2}`\n) 
      
       
       
       //not done yet lol
       
    
       
       
   }//end of switch
    
  }//end of prefix if
});

client.login(settings.token);
