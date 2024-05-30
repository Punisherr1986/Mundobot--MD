import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) conn.reply(m.chat, `『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙦𝙪𝙚 𝙗𝙪𝙨𝙘𝙖.\n\n𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n• *${usedPrefix + command} Erika lundmoen - yad*`, m)
try {
    let result = await yts(text);
    let ytres = result.videos;
  let teskd = `LISTA DE: *${text}*`
    
let listSections = [];
for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
         title: `${wm}`,
            rows: [
                {
                    header: '🎬 𝐕𝐈𝐃𝐄𝐎 🎬',
                    title: "",
                    description: `${v.title} • ${v.timestamp}\n`, 
                    id: `${usedPrefix}playvideo ${v.url}`
                },
                {
                    header: "🎶 𝐀𝐔𝐃𝐈𝐎 🎶",
                    title: "" ,
                    description: `${v.title} • ${v.timestamp}\n`, 
                    id: `${usedPrefix}playaudio ${v.url}`
                }, 
              {
                    header: "📦 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐂 📦",
                    title: "" ,
                    description: `${v.title} • ${v.timestamp}\n`, 
                    id: `${usedPrefix}playdoc2 ${v.url}`
                }, 
                {
                    header: "📦 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐂 📦",
                    title: "" ,
                    description: `${v.title} • ${v.timestamp}\n`, 
                    id: `${usedPrefix}playdoc ${v.url}`
                }
            ]
        });
    }
await conn.sendList(m.chat, `DESCARGADOR\n`, `\nLISTA DE: *${text}*`, `Ver Lista`, listSections, m);
} catch (e) {
await conn.sendButton(m.chat, `Ocurrio un error inesperado.`, null, [['❌ REPORTAR ❌', `#reporte El comando *${usedPrefix + command}* tiene un error`]], null, null, m)
console.log(e) 
}}
handler.help = ['playlist']
handler.tags = ['dl']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i

export default handler
