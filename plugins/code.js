import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''


const response = await fetch('https://raw.githubusercontent.com/MultiBot-OFC/NaufraZapp-MD/master/CONECTOR/naufrazapp-md.json')  
const data = await response.json()
let { accounts, groups } = data.info

global.img1 = 'https://i.postimg.cc/Y9t2mzvt/Menu2.jpg'
global.img2 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
global.img3 = 'https://i.postimg.cc/43sR8Ns5/Menu4.jpg'
global.img4 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
global.img5 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
global.img6 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
global.img7 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg'
global.img8 = 'https://i.postimg.cc/PqvxZdBD/06efe094-8f28-444e-b3d4-7474a9ee7f3e.jpg'
global.img9 = 'https://i.postimg.cc/MTjTwpfQ/3f77dcb2-f688-4720-ab08-2c41a86c5216.jpg'
global.img10 = 'https://i.postimg.cc/K4hmx7hX/2214c1d5-22eb-438f-8e2b-65f5b6189ef8.jpg'
global.img12 = 'https://i.postimg.cc/mkRd4hpX/Menu6.jpg'
global.img13 = 'https://i.postimg.cc/6Q5Y24vR/IMG-20240415-WA0001.jpg'
global.img14 = 'https://i.postimg.cc/RFYf0N7M/IMG-20240415-WA0000.jpg'
global.img15 = 'https://i.postimg.cc/DzMdSjFk/IMG-20240415-WA0002.jpg'
global.img16 = 'https://i.postimg.cc/2SHntc1b/IMG-20240415-WA0003.jpg'
global.img17 = 'https://i.postimg.cc/LXvSk1Cp/IMG-20240415-WA0004.jpg'
global.img18 = 'https://i.postimg.cc/Ssx3htrB/IMG-20240415-WA0005.jpg'
global.img19 = 'https://i.postimg.cc/7LZrH6Pt/IMG-20240415-WA0009.jpg'
global.img20 = 'https://i.postimg.cc/mZzzZZtr/IMG-20240415-WA0008.jpg'
global.img21 = 'https://i.postimg.cc/NMG6C34H/IMG-20240415-WA0007.jpg'
global.img22 = 'https://i.postimg.cc/L5KPfhX2/IMG-20240415-WA0006.jpg'

global.imgn1 = 'https://i.postimg.cc/t40Y23mC/IMG-20240421-WA0277.jpg'
global.imgn2 = 'https://i.postimg.cc/zDtdbB2k/IMG-20240421-WA0274.jpg'
global.imgn3 = 'https://i.postimg.cc/T1FqkKZM/IMG-20240421-WA0265.jpg'
global.imgn4 = 'https://i.postimg.cc/Y2s32Pjn/IMG-20240421-WA0268.jpg'
global.imgn5 = 'https://i.postimg.cc/x8xF9jht/IMG-20240421-WA0271.jpg'
global.imgn6 = 'https://i.postimg.cc/D0J1b2mC/IMG-20240421-WA0273.jpg'
global.imgn7 = 'https://i.postimg.cc/TYbrdYz1/IMG-20240421-WA0275.jpg'
global.imgn8 = 'https://i.postimg.cc/VNZghsrR/IMG-20240421-WA0272.jpg'
global.imgn9 = 'https://i.postimg.cc/QdXqxKcm/IMG-20240421-WA0266.jpg'
global.imgn10 = 'https://i.postimg.cc/h4LxzPD5/IMG-20240421-WA0267.jpg'
global.imgn11 = 'https://i.postimg.cc/BQyqJ2W9/IMG-20240421-WA0269.jpg'
global.imgn12 = 'https://i.postimg.cc/6QC6jqms/IMG-20240421-WA0270.jpg'
global.imgn13 = 'https://i.postimg.cc/vmwbVMH0/IMG-20240421-WA0276.jpg'

global.iimg1 = 'https://i.postimg.cc/t4KK7yy7/11fe6d78ece25ee972ee8de229e182a9.jpg'
global.iimg2 = 'https://i.postimg.cc/5t5R0Cnk/66945863cdf7c56b212c2280e91d497b.jpg'
global.iimg3 = 'https://i.postimg.cc/x1D5zdJr/0c967c4af27aa805391e3be495936acd.jpg'
global.iimg4 = 'https://i.postimg.cc/kM2LNB4D/89aaf3a76c5af6c6904716889463a278.jpg'
global.iimg5 = 'https://i.postimg.cc/gJntKTG1/e872a51954db06122d6108df482ef157.jpg'

global.wait = "『✦』▰▱▱▱▱▱▱▱▱▱"
global.waitt = "『✦』▰▰▰▰▱▱▱▱▱▱"
global.waittt = "『✦』▰▰▰▰▰▰▰▱▱▱"
global.waitttt = "『✦』▰▰▰▰▰▰▰▰▰▰"
global.waittttt = "『✅』𝙏𝙤𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤!!!"

global.ig = accounts.instagram
global.md = accounts.naufrabot_md
global.fb = accounts.facebook
global.paypal = accounts.paypal
global.cuentaofc = accounts.mail
global.asistencia = 'https://wa.me/5493873232221'
global.yt = accounts.all
global.grupo1 = groups.group1
global.grupo2 = groups.group2
global.channel = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
global.creador = 'https://wa.me/51929838430'

global.Allnz = [fb, paypal, grupo1, grupo2, asistencia, ig, md, yt, channel, tiktoknz, creador].getRandom()

global.destraba = `𝘽𝘼𝙎𝙄𝘾 / 𝙏𝙀𝙓𝙏
⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞

> 𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙊𝙁𝘾`


global.menusImgs1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].getRandom()
global.menusImgs2 = [iimg1, iimg2, iimg3, iimg4, iimg5].getRandom()
global.menusImgs3 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, iimg1, iimg2, iimg3, iimg4, iimg5].getRandom()
global.menusImgs4 = [imgn1, imgn2, imgn3, imgn4, imgn5, imgn6, imgn7, imgn8, imgn9, imgn10, imgn11, imgn13].getRandom()
global.redesNZ1 = [cloudshelln, spacenaufra, gp1, gp2, gp3, paypal, creador, channel, yt, md, fb, tiktoknz, ignz].getRandom()

global.nameN1 = '⋆『 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿 』⋆'
global.nameN2 = '⌑【⋆⊱• 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 •⊰⋆】⌑'
global.nameN3 = '꧁⋆⊰ 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 ⊱⋆꧂'
global.menusNZ = [nameN1, nameN2, nameN3].getRandom()

global.nameNN1 = '⋄ 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 │ ᵇᵒᵗ-ʷʰᵃ ⋄'
global.nameNN2 = '•⊰➷ 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 ➸ 𝑩𝒐𝒕 ➹⊱•'
global.nameNN3 = '␥𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑␥𝑴𝑫␥'
global.menusNZ1 = [nameNN1, nameNN2, nameNN3].getRandom()

global.nameNN4 = '␥ 𝑴𝒆𝒏𝒖 ␥ 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒐 ␥'
global.nameNN5 = '꧁『 𝐌𝐄𝐍𝐔 𝐎𝐅𝐂 』꧂'
global.nameNN6 = '⟅🌌⋆⊰ 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 ⊱⋆🌌⟆'
global.menusNZ2 = [nameNN4, nameNN5, nameNN6].getRandom()

global.nameNN7 = '␥𝑳𝒊𝒔𝒕𝒂␥𝒅𝒆␥𝑴𝒆𝒏𝒖𝒔␥'
global.nameNN8 = '⑇ ⌑ ⋆ ⊱•𝑴𝒆𝒏𝒖𝑳𝒊𝒔𝒕•⊰ ⋆ ⌑ ⑇ '
global.nameNN9 = '✧ ⋆ ⊹ 𝑴𝒆𝒏𝒖𝑳𝒊𝒔𝒕 ⊹ ⋆ ✧ '
global.menusNZ3 = [nameNN7, nameNN8, nameNN9].getRandom()

global.menuImg1 = fs.readFileSync("./NaufraZapp/Naufra1.jpg")
global.menuImg2 = fs.readFileSync("./NaufraZapp/Naufra2.jpg")
global.menuImg3 = fs.readFileSync("./NaufraZapp/Naufra3.jpg")

global.nzSticker = fs.readFileSync("./STICKER/Naufra.jpg"

global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.fakeChannel = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: menusImgs1, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./NaufraZapp/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'WhatsApp bot', sourceUrl: Allnz, thumbnail: await(await fetch(global.menusImgs1)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: paypal, mediaType: 'VIDEO', description: '', title: wm, body: 'WhatsApp Bot', thumbnailUrl: menuImg1, sourceUrl: Allnz }}}
let dos = [enlace, enlace2]  
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
     }
  
