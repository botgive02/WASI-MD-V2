I//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923247116683@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923247116683";
global.sudo = process.env.SUDO || "923247116683";
global.owner = process.env.OWNER_NUMBER || "923247116683";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEQ1dTRjV0VsM2llYkVtZVpHTkNlMTlXcGVCcURjUEFncXdkcWJmODZtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTRFU0FlZUJOT0xjNkt1REJqTlVVZmdQdUlRSVVzcWdMYitTcnd3TWNrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQkMwcTkydUdZMGZSRUt3VWkyOTF2MTNmSHdreWY2SThnSlRXclhXVFZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsUkVFbzAyWkEyYmcrZEIyT1pxMDZqb01vNkUrVFR6dm0zc3hQK2p5cGlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLcG1naTZPTGwwQ2JYamYzWVZMbldTQlYwVmtiRUtjZHNNOHpac0RkMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp3WlFWaEpxaGhnc1BXdVQ2aUo3Vy9hSUZqaTYveHZPam93YmtVY1A5bGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUU4MDg0K1E4dHZYVUpyRUxGazRjNkJVSzFKOWFSVndiQ29mZ3ZzRzNVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1BYTDVZbDZQTkxXMlRNUVhXZXp5UXQzTk8xUWxtSjFvTnVQbFZUV3Rrdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlvUk9RYTZBSnhmN3R0a3RjRklrNGZSN3ZXVUlGbERUWTdQeXBQSmgzUlhySVdPTzRlRDRZRjR0RjNreUlDQzZvTXIwMDFmbDk3WnEzTmRRTW1ZOURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiI3WHIyMVpweW1UdFVHMUFHUWRkLy83QldMTFlYS1Zaay9MM25US0xnVFRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaZnVJWVNUMlM0ZUtacjMwNDVaeHV3IiwicGhvbmVJZCI6IjRjOGQxODY3LTQ1NjYtNDZjMy04MTUwLTU4MDM4MWI4YjBjMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRkZ2UXVzM1c1ZkphMzA1eVk5RTF6clVXTlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3lib0srelNsNnV2dlEzOG9IbE80WGl5d21FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdRQkZFMVFEIiwibWUiOnsiaWQiOiI5MjMyNDcxMTY2ODM6NjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcbuKBuVxuwrJcbsKzXG7Cslxu4oG0XG7igbdcbsK5XG7CuVxu4oG2XG7igbZcbuKBuFxuwrNcblxuXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxuXG5cblxuXG5cbjwzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZjUrZFVDRUo2bC9yd0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPSIsImFjY291bnRTaWduYXR1cmUiOiJxRnoxNUVYa1BVSkpka05sK2ZsWjRQUEVZVTA0U2pFekhLZUlhL3RuWTlMREQvQW0rUTFER2hReEFQZE1WbkxlazJzclhyZFpVdkNhQUxsZ1R2MmlEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieVRrMjdSYW5hL0Y0dVBRdXIyYTN4ZzkrMXdHZm1VcW4vZmdXQTdYRXd5Wit4cGZ1djJuTnFETWEzaTdqcUZnYzZJUER3VFozZ0o5cG5FY0RTL3ZzRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNDcxMTY2ODM6NjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZU01WmtBWE5FamtDZHpabExha3k3RFowdVVxeXh4SlkxR2gyM1U0ZW5BMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODUxMTAyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPRVoifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "923247116683",
  packname: process.env.PACK_NAME || "ZiDi Malik",
  botname: process.env.BOT_NAME || "ZiDi-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "ZiDi MALIK",
  errorChat: process.env.ERROR_CHAT || "923247116683",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "ZiDi").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
