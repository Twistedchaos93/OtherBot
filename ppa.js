const http = require('http');
const express = require('express');
const ppa = express();
ppa.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
ppa.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready",() => {
  console.log("Im ready dog");
});

var prefix = "~";
var msgContents;
var swears = ["fuck", "shit", "dammit", "damn", "bitch", "ech"];
var theList = [];
client.on('message', msg => {
  const Heresy = msg.guild.emojis.find("name", "Heresy");
  const ChristianServer = msg.guild.emojis.find("name", "ChristianServer");
  if (msg.author === client.user) return;
  msgContents = msg.content;


// Silly stuff without prefix
  if (testList(swears)) {
    msg.channel.send(ChristianServer.toString()+' YOU HECKIN SWORE '+ ChristianServer.toString());
  }
  if(msgContents.toLowerCase().includes("heresy")){
    msg.channel.send('Did somebody say heresy? '+ Heresy.toString());
  }
// Prefix based stuff
  if (msg.content.startsWith(prefix)){
    switch(msgContents){
      case "~test":
        msg.channel.send("It worked!")
      break;
      case "~arraysstartat1":
        msg.channel.send("Of course! Why wouldn't they?")
      break;
      //The List
      case "~addmetothelist":
        theList[msg.author.username] = true;
        msg.channel.send("Confirmed");
      break;
      case "~amionthelist":
        if (theList[msg.author.username]){
          msg.channel.send("Indeed");
        }else{
          msg.channel.send("Nope");
        }
      break;
      case "~removemefromthelist":
        theList[msg.author.username] = false;
        msg.channel.send("Confirmed");
      break;
      //End The List
      default:
        msg.channel.send("I don't understand");
    }
  }

});
client.login(process.env.TOKEN);

function testList(array){
  for(var i = 0; i<array.length; i++){
    if (msgContents.toLowerCase().includes(array[i])){
      return(true);
    }
  }
  return(false);
}
