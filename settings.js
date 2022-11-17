const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.Hi = fs.readFileSync("./bgm/Hi.mp3") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//Heroku Functions
global.HEROKU = {
    API: process.env.HEROKU_API,
    NAME : process.env.APP_NAME,
    STATUS : true
}

//owmner v card
global.vcardowner = ['916909137213'] //ur owner number
global.ownername = "🦄Dream Guy Xeon" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['916909137213']
global.ownertag = '916909137213' //ur tag number
global.botname = 'Cheems Bot MD V4' //ur bot name
global.linkz = "https://youtu.be/WiIqCdiDjFo" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Cheems Bot Stickers\n\n\n\n\n\n\n\n\n\n\n🦄🦄🦄 " //ur sticker watermark packname
global.author = "🦄Dream Guy Xeon" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['916909137213'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.owner= [process.env.OWNER_NUMBER] || ['94715264791'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.alivelogo = process.env.ALIVE_LOGO || `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive = process.env.ALIVE_MESSAGE
global.cap = process.env.CAPTION
global.AUTO_BIO = process.env.AUTO_BIO || 'off'
global.INBOX_BLOCK = process.env.INBOX_BLOCK || 'off'
global.AUTO_REACT = process.env.AUTO_REACT || 'true'
global.ANTI_BADWORD = process.env.ANTI_BADWORD || 'true'
global.botnma = process.env.BOT_NAME || 'QUEEN MELISA' 
global.ownernma = process.env.OWNER_NAME || 'MR TIMA' 
global.packname = process.env.STICKER_PACK_NAME || 'ඉදලා ගිය උන්ට පින් පිනිස #bye' 
global.author = process.env.STICKER_AUTHOR_NAME || 'MADE BY WHATSAPP' 
global.antilink = process.env.ANTI_LINK || 'true'
global.WELCOME_MSG = process.env.WELCOME_MSG
global.GOODBYE_MSG = process.env.GOODBYE_MSG
global.INBOX_BLOCK_MSG = process.env.INBOX_BLOCK_MSG || 'BLOCK !!!'
global.BLOCK_CHAT = 'setgrp'
global.BLOCK_CALL = process.env.BLOCK_CALLERS || 'false'
global.SEND_WELCOME = process.env.SEND_WELCOME_MASSAGE || 'false'
global.OWNER_REACT = '💻'

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
