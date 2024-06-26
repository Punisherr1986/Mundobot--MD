let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '👀', key: m.key } })
let str = `*Te gustaría tener este bot en tu grupo, Para disfrutar de este bot es muy facil:* 

1. Tienes que tener un numero de WhatsApp disponible para poner el bot en ese número...

2. Tiene que registrar el numero Punisher en su WhatsApp para que le ponga el bot en ese numero...

➪ si tienes dudas escríbele a Punisher y el te informara... escribirme al siguiente número👇

https://Wa.me/+573108625104

➪Si en caso no estoy disponible por ese momento, cuando este ya le avisaré 😏

* Un placer Punisher ✌️`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^quierounbot|linkmb$/i
handler.register = true
handler.exp = 33

export default handler
