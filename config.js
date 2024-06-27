import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"

global.botnumber = ""
global.confirmCode = ""

//• ↳𝑷𝑶𝑵 𝑳𝑶𝑺 𝑵𝑼𝑴𝑬𝑹𝑶𝑺 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑨𝑺
global.owner = [
['573108625104', '🔥 𝗣𝘂𝗻𝗶𝘀𝗵𝗲𝗿 🔥', true],
['34636445091', '💻 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 𝟭 💻', true],
['16285002831', '🎉 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 𝟐 🎉', true],
['573108625104'],
['573108625104']]

//• ↳𝑨𝑮𝑹𝑬𝑮𝑨𝑻𝑬 𝑺𝑰 𝑬𝑹𝑬𝑺 𝑶𝑾𝑵𝑬𝑹
global.contactos = [
["573108625104", '🔥 𝗣𝘂𝗻𝗶𝘀𝗵𝗲𝗿 🔥', 1],
["34636445091", '🛡️ 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 🛡️', 1],
["16285002831", '🌎 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 𝟐 🌎', 1],
["573108625104", '🍃 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 𝟑🍃', 1],
["573108625104", '💎 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 𝟒 💎', 1]]

global.suittag = ['5493873687620'];
global.prems = ['19145948340'];

global.lenguajeSK = es //idioma de sakurabot

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 🍁
global.packname = '『🍃 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿 🍃』';
global.stickwm = '『🤖』𝗕𝗢𝗧 𝗪𝗛𝗔:\n\n『🌎』𝗖𝗥𝗘𝗔𝗗𝗢 𝗘𝗡:'
global.stickem2 = '❲⊹❳» 🍃 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿 🍃\n\n❲⊹❳ » 2️⃣0️⃣2️⃣4️⃣'
global.author2 = '𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁'
global.author3 = '2024 🍂'
global.author = '𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁';
global.wm = '🍁 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁 🍁';
global.sk = '𝑩𝒐𝒕 𝒃𝒚: 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁';
global.titulowm = '⋆❲⊹⊰ 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁 ⊱⊹❳⋆';
global.titulowm2 = `⋆ ⌑ 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁 ⌑ ⋆`
global.igfg = '𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁';
global.vs = '1.9.5';
global.vsJB = '1.0.2';

//• ↳ ◜𝑴𝑺𝑮 𝑫𝑬 𝑬𝑺𝑷𝑬𝑹𝑨◞ • 🈸
global.wait = '『✦』▰▱▱▱▱▱▱▱▱▱';
global.waitt = '『✦』▰▰▰▰▱▱▱▱▱▱';
global.waittt = '『✦』▰▰▰▰▰▰▰▱▱▱';
global.waitttt = '『✦』▰▰▰▰▰▰▰▰▰▰';

//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./AhoraQue.png');
global.imagen8 = fs.readFileSync('./Que.jpg');

global.img1 = 'https://i.postimg.cc/kgSygV2H/Menu7.jpg'
global.img2 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.img3 = 'https://i.postimg.cc/PxQ3rCRH/Menu4.jpg'
global.img4 = 'https://i.postimg.cc/PxQ3rCRH/Menu4.jpg'
global.img5 = 'https://i.postimg.cc/PxQ3rCRH/Menu4.jpg'
global.img6 = 'https://i.postimg.cc/kgSygV2H/Menu7.jpg'
global.img7 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.img8 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.img9 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.img10 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.img12 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.img13 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.img14 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.img15 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.img16 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.img17 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.img18 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.img19 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.img20 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.img21 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.img22 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'

global.imgn1 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.imgn2 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.imgn3 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.imgn4 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.imgn5 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.imgn6 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.imgn7 = 'https://i.postimg.cc/SQT0WPgh/Menu6.png'
global.imgn8 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.imgn9 = 'https://i.postimg.cc/J07TyRfk/Menu3.jpg'
global.imgn10 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.imgn11 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.imgn12 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'
global.imgn13 = 'https://i.postimg.cc/fTJG5vP0/Menu5.jpg'

global.iimg1 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.iimg2 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.iimg3 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.iimg4 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'
global.iimg5 = 'https://i.postimg.cc/WzfQTDd3/Menu.jpg'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.spacenaufra = 'https://wa.me/5493873687620'
global.cloudshelln = 'https://shell.cloud.google.com/?show=ide%2Cterminal&authuser=6&fromcloudshell=true'
global.gp1 = 'https://chat.whatsapp.com/IxdHYBEnUJ5Eiu3qiDjCTa'
global.gp2 = 'https://chat.whatsapp.com/IxdHYBEnUJ5Eiu3qiDjCTa'
global.gp3 = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
global.channel = 'https://whatsapp.com/channel/0029Va6GrhF17EmnN4eF5F25'
global.paypal = 'https://www.paypal.me/NaufragoSolano'
global.creador = 'https://wa.me/51929838430'
global.yt = 'https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx'
global.md = 'https://github.com/Bots-WhatsApp-OFC'
global.fb = 'https://www.facebook.com/share/8XyV52kz3sfhrzft/?mibextid=qi2Omg'
global.tiktoknz = 'https://www.tiktok.com/@naufra.zapp?_t=8kcJigwvtji&_r=1'
global.ignz = 'https://www.instagram.com/naufrazapp?igsh=Y2g1ZXJxbm53eXAy'
global.asistencia = 'https://wa.me/5493873687620'

global.menusImgs1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
global.menusImgs2 = [iimg1, iimg2, iimg3, iimg4, iimg5]
global.menusImgs3 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, iimg1, iimg2, iimg3, iimg4, iimg5]
global.menusImgs4 = [imgn1, imgn2, imgn3, imgn4, imgn5, imgn6, imgn7, imgn8, imgn9, imgn10, imgn11, imgn13]
global.redesNZ1 = [cloudshelln, spacenaufra, gp1, gp2, gp3, paypal, creador, channel, yt, md, fb, tiktoknz, ignz]

global.nameN1 = '⋆『 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿 』⋆'
global.nameN2 = '⌑【⋆⊱• 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿 •⊰⋆】⌑'
global.nameN3 = '꧁⋆⊰ 𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿 ⊱⋆꧂'
global.menusNZ = [nameN1, nameN2, nameN3]

global.nameNN1 = '⋄ 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 │ ᵇᵒᵗ-ʷʰᵃ ⋄'
global.nameNN2 = '•⊰➷ 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 ➸ 𝑩𝒐𝒕 ➹⊱•'
global.nameNN3 = '␥𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿␥'
global.menusNZ1 = [nameNN1, nameNN2, nameNN3]

global.nameNN4 = '␥ 𝑴𝒆𝒏𝒖 ␥ 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒐 ␥'
global.nameNN5 = '꧁『 𝐌𝐄𝐍𝐔 𝐎𝐅𝐂 』꧂'
global.nameNN6 = '⟅🌌⋆⊰ 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 ⊱⋆🌌⟆'
global.menusNZ2 = [nameNN4, nameNN5, nameNN6]

global.nameNN7 = '␥𝑳𝒊𝒔𝒕𝒂␥𝒅𝒆␥𝑴𝒆𝒏𝒖𝒔␥'
global.nameNN8 = '⑇ ⌑ ⋆ ⊱•𝑴𝒆𝒏𝒖𝑳𝒊𝒔𝒕•⊰ ⋆ ⌑ ⑇ '
global.nameNN9 = '✧ ⋆ ⊹ 𝑴𝒆𝒏𝒖𝑳𝒊𝒔𝒕 ⊹ ⋆ ✧ '
global.menusNZ3 = [nameNN7, nameNN8, nameNN9]

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🌎' + hour;

global.mods = [];

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nNaufraZapp-MD`;
global.gt = '𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿';
global.mysticbot = '𝗠𝘂𝗻𝗱𝗼𝗕𝗼𝘁-𝙈𝘿';
global.mysticbot = 'https://github.com/Bots-WhatsApp-OFC';
global.nomorown = '5493873687630';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
