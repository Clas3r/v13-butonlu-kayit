const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "yardım",
    aliases: ["y", "help"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.reply({ embeds: [embed.setDescription(`
\`- ${config.bot.prefix}kke [@Claser/ID]
- ${config.bot.prefix}isimler [@Claser/ID]
- ${config.bot.prefix}kayıtsız-etiketle
- ${config.bot.prefix}ping
- ${config.bot.prefix}kayıt [@Claser/ID] (isim-yaş)
- ${config.bot.prefix}isim [@Claser/ID] (isim-yaş)
- ${config.bot.prefix}kayıtsız
- ${config.bot.prefix}top-kayıt [@Claser/ID]
- ${config.bot.prefix}müzisyen [@Claser/ID]
- ${config.bot.prefix}sponsor [@Claser/ID]
- ${config.bot.prefix}vip [@Claser/ID]
- ${config.bot.prefix}veri-sıfırla [@Claser/ID]
- ${config.bot.prefix}eval 
- ${config.bot.prefix}rolsüz
- ${config.bot.prefix}reboot\`
`)] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 60000));

    }
}
