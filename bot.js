var prefix = ".";

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`هيتهات النوب`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });
client.login("NDY4MzQwOTc4ODQ0MDQxMjE3.Di3wGg.jmdIAx2znpWVnooewYZhxp6nrtI" );
