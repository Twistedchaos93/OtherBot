const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready",() => {
  console.log("FinnBot operational");
});

var prefix = "!";
var msgContents;
var playerList = [];
var playerMoney = [];
var commandList = ["!ping", "!enter", "!reset"];
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;//can be min but not max
}
//7s and 12s
function gamble(bet){
 if(bet>=playerMoney[msg.author.username]&&playerList[msg.author.username]==true){
  var die1 = random(1,7);
       var die2 = random(1,7);
       var dieTotal = die1 + die2;
       var prevPlayMoney = playMoney[msg.author.username];
       msg.channel.send(`Die 1 result: ${die1}
Die 2 result: ${die2}
Total: ${dieTotal}`) 
      if (dieTotal == 7){
        msg.channel.send(`Your bet of ${bet} has been added to your balance!`)
        playerMoney[msg.author.username] += bet;
      } else if (dieTotal == 12){
        msg.channel.send(`Two times your bet of ${bet} won, adding ${bet*2}`)
        playerMoney[msg.author.username] += bet*2;
      } else {
        msg.channel.send(`You lost, your bet of ${bet} has been subtracted!`)
        playerMoney[msg.author.username] -= bet; 
      }
      msg.channel.send(`Your previous balance of ${prevPlayerBalance[msg.author.username]} is now ${playerMoney[msg.author.username]}`)
   } else if (playerList[msg.author.username==true]){
   msg.channel.send(`Your balance of ${playerMoney[msg.author.username]} is not high enough for your bet of ${bet} (Difference of ${(bet-playMoney[msg.author.username])})`)
    } else {
    msg.channel.send(`Player not found`)
    }
}
//adding money to the group
function groupAdd(amount){
  for (i=0;i<playerlist.length;i++){
    playerMoney[i] += amount;
  }//end of for loop
}//end of function

//parser
client.on('message', msg => {
  msgContents = msg.content;
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
       if (msg.author.username == "FinnRules" || msg.author.username == "Chimbitz Krambo"){
        playerList = [];
        playerMoney = [];
        msg.channel.send(`All players removed by ${msg.author.username}`)
       } else {
        msg.channel.send(`${msg.author.send} is not recognised as a user who reset privs`)
       }
     break;
     case "!bet1":
      gamble(1);
     break;
     case "!bet5":
      gamble(5);
     break;
     case "!bet10":
      gamble(10);
     break;
     case "!bet20":
      gamble(20);
     break;
     case "!bet50":
      gamble(50);
     break;
     case "!bet100":
      gamble(100);
     break;
     case "!betthefarm":
      gamble(playerMoney[msg.author.username]);
     break;
     case "!balance":
      msg.channel.send(`Balance for ${msg.author.username} is ${playerMoney[msg.author.username]}`)
     break;
     case "!inflation"
      groupAdd(10);
     break;
       
       
       //not done yet lol
       
    
       
       
   }//end of switch
    
  }//end of prefix if
});

client.login(settings.token);
