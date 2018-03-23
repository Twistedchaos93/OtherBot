const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready",() => {
  console.log("Im ready dog");
});

var prefix = "~";
var msgContents;
var swears = ["fuck", "shit", "dammit", "damn", "bitch", "ech"];

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
  if (msg.contents.startsWith(prefix)){
    switch(msgContents){
      case "~test":
      msg.channel.send("It worked!")
      break;
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
