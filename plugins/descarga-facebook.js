import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper';
//if(mensajes[1].toLowerCase() === ".facebook" || mensajes[1].toLowerCase() === ".fb"){
                    let {key} = await this.sendMessage(m.chat, {text: "Cargando...\n`██------`"});
                    try{
                        const {result} = await facebookdl(mensajes[2]).catch(async (_) => await facebookdlv2(mensajes[2])).catch(async (_) => await savefrom(mensajes[2]));
                        await this.sendMessage(m.chat, {text: "Cargando...\n`████----`", edit:key});
                        for (const {url, isVideo} of result.reverse()){
                            await this.sendMessage(m.chat, {text: "Cargando...\n`██████--`", edit:key});
                            await this.sendMessage(m.chat, {video: {url: url}});
                            await this.sendMessage(m.chat, {text: "Completado\n`████████`", edit:key});
                            break;
                        }
                        
                    }catch(er){
                        console.log(er);
                        await this.sendMessage(m.chat, {text: "> _*Error no se pudo mandar el video!*_", edit: key});
                    }
                }
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = false
//handler.diamond = true

export default handler

/*
function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}
*/
