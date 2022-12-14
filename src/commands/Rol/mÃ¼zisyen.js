const config = require("../../../config.json")
const db = require('quick.db');
const moment = require("moment");
const limit = new Map();
moment.locale("tr");

module.exports = {
    name: "müzisyen",
    aliases: ["musicians", "vokal"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.registration.botcommands)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanabilmek için geçerli yetkiniz yok!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        if (!member) return message.reply({ embeds: [embed.setDescription("Geçerli bir kullanıcı belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (member.id === author.id) return message.reply({ embeds: [embed.setDescription("Kendinize rol veremezsiniz!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        
        guild.members.cache.get(member.id).roles.add(config.roles.müzisyen);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.müzisyen}> rolü verildi.`)] });
        
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.müzisyen}> rolü verildi.
      
        \`Kullanıcı:\` ${member} - (**${member.id}**)
        \`Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Rol:\` <@&${config.roles.müzisyen}>     
        \`Tarih:\` ${moment(Date.now()).format("LLL")}`)] });
    }
}
