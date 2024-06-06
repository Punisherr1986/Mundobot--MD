import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args, command, usedPrefix}) => {
if (!args[0]) return conn.reply(m.chat, `💭 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `💭 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
try { 
await conn.reply(m.chat, `𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤...`, fkontak, m)
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}` 
}
conn.sendFile(m.chat, r2es, 'error.mp4', `𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠...`, m);
} catch (err1) {
try {
const req = await igeh(args[0])
conn.sendMessage(m.chat, {video: {url: req.url_list}}, m)
} catch (err1_2) {
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendFile(m.chat, VIDEO, 'error.mp4', `𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠...`, m);
} catch (err2) {
try {
const ress = await fg.fbdl(args[0]);
const urll = await ress.data[0].url;
await conn.sendFile(m.chat, urll, 'error.mp4', `𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠...`, m);
handler.limit = 3
} catch (err3) {
try {
const res = await fbDownloader(args[0]);
for (const result of res.download) {
const ur = result.url;
await conn.sendFile(m.chat, ur, 'error.mp4', `𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠...`, m);
handler.limit = 3
}} catch (err4) {
try {
const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`);
const json = await res3.json();
const url3 = await json.video;
await conn.sendFile(m.chat, url3, 'error.mp4', `𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠...`, m);
handler.limit = 3
} catch (err5) {
try {
const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠...`, m);
handler.limit = 3
} catch (err6) {
await conn.reply(m.chat, `𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙝𝙖 𝙛𝙖𝙡𝙡𝙖𝙙𝙤 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙖𝙢𝙚𝙣𝙩𝙚, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧.`, fkontak, m)
console.log(`𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(err6)
handler.limit = false
}}}}}}}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
//handler.limit = 3 
export default handler

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // get cookie from request
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
 });
} else {
ig.push(response.data.url[0].url);
}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message);
});
} catch (e) {
reject(e.message);
}})}

/*
import fetch from 'node-fetch';
let enviando = false;

const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `_*🪐 Ingrese un enlace valido de Facebook.*_\n\n*Por ejemplo:* _${usedPrefix + command} https://fb.watch/fOTpgn6UFQ/_`;
  const linkface = await isValidFacebookLink(args[0])  
  if (!linkface) throw `_*🪐 Ingrese un enlace valido de Facebook.*_\n\n*Por ejemplo:* _${usedPrefix + command} https://fb.watch/fOTpgn6UFQ/_`;
  if (!enviando) enviando = true
  try {
    await m.reply(`_*Descargando...*_`);
    const d2ata = await fetch(`${global.MyApiRestBaseUrl}/api/facebook?url=${args[0]}&apikey=${global.MyApiRestApikey}`);
    const r2es = await d2ata.json();
    let linkdl = '';  
    if (r2es?.status === true) {
      linkdl = `${r2es.resultado.data}`;
    } else {
      linkdl = XD  
      enviando = false
    }
    conn.sendMessage(m.chat, {video: {url: linkdl}, filename: 'error.mp4', caption: `_*${tradutor.texto4}*_`}, {quoted: m});
    enviando = false
  } catch (err1) {
      enviando = false
      console.log('Error: ' + err1.message)
      throw `❌ _*Ocurrio un error inesperado, reporta el comando.*_`;
  }
};
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i;
export default handler;

async function isValidFacebookLink(link) {
    const validPatterns = [/facebook\.com\/[^/]+\/videos\//i, /fb\.watch\//i, /fb\.com\/watch\//i, /fb\.me\//i, /fb\.com\/video\.php\?v=/i, /facebook\.com\/share\/v\//i, /facebook\.com\/share\/r\//i, /fb\.com\/share\/v\//i, /fb\.com\/share\/r\//i, /facebook\.com\/[^/]+\/posts\/[^/]+\//i, /facebook\.com\/reel\/[^/]+\//i];
    return validPatterns.some(pattern => pattern.test(link));
                              }
*/
