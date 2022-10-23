const Discord = require("discord.js");
const client = new Discord.Client();


const cmds = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of cmds) {
  const cmds = require(`./cmds/${file}`);
  client.cmds.set(cmds.name, cmds);

}

    if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      

});

client.login(token);
