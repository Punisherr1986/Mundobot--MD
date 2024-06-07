export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('hola')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`『✦』Hola: @${m.sender.split`@`[0]}, *Le saluda NaufraZapp*
> Disculpe pero no está permitido hablar en privado del bot, así que tengo el deber de bloquearlo

*Si quieres saber como instalarme gratuitamente para tenerme en su grupo, por favor siga el siguiente canal de WhatsApp*
https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
