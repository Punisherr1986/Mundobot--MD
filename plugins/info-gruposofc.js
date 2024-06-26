hlet media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '👀', key: m.key } })
let str = `*💥 GRUPOS OFICIALES🐦‍🔥*

    *_MundoBot oficial_*
  *❏ https://chat.whatsapp.com/FkjjdPygRntIhOtbJ7MwkG*
*_Unete_*

    *_grupo bot 1 MundoBot-MD_*
  *_❏ https://chat.whatsapp.com/GLmQrA3ehcQD35Yh77xp8x*

*_grupo bot 2 MundoBot-MD_*
https://chat.whatsapp.com/J2HUC0jWtec5wtY3OWyzVb

  *💥 CANAL OFICIAL🐦‍🔥*

    *_Canal MundoBot-MD_*
  *❏ ${channel}*
*_Unete_*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupomb|linkmb|gruposwhatsApp$/i
handler.register = true
handler.exp = 33

export default handler
