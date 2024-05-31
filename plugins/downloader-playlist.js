
import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `*${usedPrefix + command}Lil Peep hate my life*`;
    m.react('✨');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: 'AUDIO',
                    title: "",
                    description: `*DURACION:* ${v.timestamp}\n`, 
                    id: `${usedPrefix}playaudio ${v.url}`
                },
                {
                    header: "VIDEO",
                    title: "" ,
                    description: `*DURACION:* ${v.timestamp}\n`, 
                    id: `${usedPrefix}playvideo ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  LISTA DE MUSICAS Y VIDEOS.', `\nResultados de:\n *${text}*`, `Ver Lista`, ytres[0].image, listSections, m);
};

handler.help = ['playlist']
handler.tags = ['dl']
handler.command = ['playlist', 'playvid2', 'playlista', 'playlistas'] 
handler.disabled = false

export default handler
      
