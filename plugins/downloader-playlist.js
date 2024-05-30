import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙦𝙪𝙚 𝙗𝙪𝙨𝙘𝙖.\n\n𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n• *${usedPrefix + command} Anoté lover*`;
    m.react('🌌');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${wm}`,
            rows: [
                {
                    header: `『🌌』 ${v.title}`,
                    title: "🎬 𝐕𝐈𝐃𝐄𝐎 🎬",
                    description: `DURACION: ${v.timestamp}\n`, 
                    id: `${usedPrefix}playvideo ${v.url}`
                },
                {
                    header: `『🌌』 ${v.title}`,
                    title: "🎬 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐂 🎬",
                    description: `DURACION: ${v.timestamp}\n`, 
                    id: `${usedPrefix}playdoc2 ${v.url}`
                },
                {
                    header: `『🌆』 ${v.title}`,
                    title: "🎶 𝐀𝐔𝐃𝐈𝐎 🎶",
                    description: `DURACION: ${v.timestamp}\n`, 
                    id: `${usedPrefix}playaudio ${v.url}`
                },
                {
                    header: `『🌆』 ${v.title}`,
                    title: "🎶 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐂 🎶" ,
                    description: `DURACION: ${v.timestamp}\n`, 
                    id: `${usedPrefix}playdoc ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '', `*${text}*\n\n*LISTA DE MUSICAS Y VIDEOS*`, `Ver Lista`, ytres[0].image, listSections, m);
};

handler.help = ['playlist']
handler.tags = ['dl']
handler.command = ['playlist', 'playvideoslist', 'playlist2', 'playlista'] 
handler.disabled = false

export default handler
                  
