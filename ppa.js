const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready",() => {
  console.log("I'm ready bro");
});

var prefix = "~";
var msgContents;
var swears = ["fuck", "shit", "dammit", "damn", "bitch", "ech"];
var theList = [];
client.on('message', msg => {
  
});

client.login(settings.token);
