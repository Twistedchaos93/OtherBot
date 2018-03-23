const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready",() => {
  console.log("I'm ready dog");
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
      //Show full list
      case "~showlist":
        msg.channel.send(`In-Game Players(${theList.length})`);
        for (i=0; i<theList.length; i++){
         msg.channel.send(theList[i]); 
        }
      break;
      //End The List
      default:
        msg.channel.send("I don't understand");
    }
  }

});

client.login(settings.token);

function testList(array){
  for(var i = 0; i<array.length; i++){
    if (msgContents.toLowerCase().includes(array[i])){
      return(true);
    }
  }
  return(false);
}
