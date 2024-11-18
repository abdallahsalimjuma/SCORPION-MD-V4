import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "repo") {
    const start = new Date().getTime();
    await m.React('🌚');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `┏━💀
┃۞SCORPION ᗰᗪ
┃۞ᐯIՏIOᑎ (9) 
┗━━━━━💀
┏━💀
┃https://github.com/abdallahsalimjuma/Scorpion-Md-v4
┃ᴄʀᴇᴀᴛᴇᴅ ʙʏ dullahᴛᴇᴄʜ
┗━━━━━━━━━💀
┏━━━━━💀
┃ ༆ ᴡᴇʟᴄᴏᴍᴇ ɪɴ ᴍʏ sɪᴛᴇ..
 |  ᴄʜᴀɴɴᴇʟ;https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f
┗━━━━━━━━━━━━━━━━💀`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
