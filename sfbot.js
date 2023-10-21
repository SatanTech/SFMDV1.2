/*
   Created By sfbotDev
   My Contact wa.me/6289513081052
*/

const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { TelegraPH } = require('./lib/TelegraPH')
const { uptotelegra } = require('./lib/upload')
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isRegistered = checkRegisteredUser(m.sender)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunc')
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
let afk = require("./lib/afk");
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let akinator = []
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */



/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./src/data/owner.json'))
let _user = JSON.parse(fs.readFileSync('./src/data/user.json'))
let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))
let autosimi = JSON.parse(fs.readFileSync('./src/data/simi.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntlinkgc2 =JSON.parse(fs.readFileSync('./database/antilinkgc2.json'));

/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const Vnsfbot = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const Stickersfbot = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const Imagesfbot = JSON.parse(fs.readFileSync('./src/media/image.json'))
const Videosfbot = JSON.parse(fs.readFileSync('./src/media/video.json'))

const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : true
const Antilinkgc2 = m.isGroup ? ntlinkgc.includes(m.chat) : true
const totalFitur = () =>{
            var mytext = fs.readFileSync("./sfbot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = sfbot = async (sfbot, m, msg, chatUpdate, store) => {
    try {
        /* ~~~~~~~~~ BASE sfbotDEV ~~~~~~~~~ */
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await sfbot.decodeJid(sfbot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isSimi = autosimi.includes(from)
        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isAdrian = ('6282114542876@s.whatsapp.net').includes(m.sender)
        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await sfbot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const isUser = _user.includes(m.sender)
        expiredCheck(sfbot, m, premium);
        
        /* ~~~~~~~ OBFUSCATE ~~~~~~~ */
        
        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function newReply(teks) {
           if (typereply === 'v1') {
               m.reply(teks)
           } else if (typereplay === 'v2') {
               sfbot.sendMessage(m.chat, {
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: global.namabot,
                        body: jam(),
                        previewType: "PHOTO",
                        thumbnail: fs.readFileSync('./media/quoted.jpg'),
                        sourceUrl: global.link
                     }
                  },
                  text: teks
               }, { quoted: m });
           };
        }
        /* ~~~~~~~~~~~ ANTILINK ~~~~~~~~~~~~~*/
if (Antilinkgc2) {
if (budy.match(`chat.whatsapp.com`)) {
newReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Link Grup Lain Akan Kami Hapus !`)
if (!isBotAdmins) return newReply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await sfbot.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return newReply(`Ternyata Link Grup Ini🗿`)
if (isAdmins) return newReply(`Admin Mah Bebas Yakan?`)
if (isCreator) return newReply(`Owner Mah Bebas Yakan?`)
sfbot.sendMessage(m.chat, { delete: m.key })
sfbot.sendMessage(m.chat, { delete: m.key })
}
}

if (Antilinkgc) {
if (budy.match(`chat.whatsapp.com`)) {
newReply(`「 ANTI LINK WHATSAPP 」\n\n${pushname} Terdeteksi Mengirim Link Group, Kamu Akan Dikeluarkan !!`)
if (!isBotAdmins) return newReply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await sfbot.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return newReply(`Ternyata Link Grup Ini🗿`)
if (isAdmins) return newReply(`Admin Mah Bebas Yakan?`)
if (isCreator) return newReply(`Owner Mah Bebas Kan?`)
sfbot.sendMessage(m.chat, { delete: m.key })
sfbot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
        /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
        if (!sfbot.public) {
            if (isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            sfbot.readMessages([m.key])
        }
        if (autobio) {
            sfbot.updateProfileStatus(`Hallo Saya ${namabot} Aktif Selama ${runtime(process.uptime())} Jangan Telpon Bot Ya Anjing!`).catch(_ => _)
        }
        if (chatUpdate['messages.upsert']) {
            const upsert = chatUpdate['messages.upsert']
            for (let msg of upsert.messages) {
               if (msg.key.remoteJid == 'status@broadcast' && !msg.key.fromMe && !msg.message?.protocolMessage) {
                  console.log(`Lihat status ${msg.pushName} ${msg.key.participant.split('@')[0]}\n`)
                  sfbot.readMessages([msg.key])
               }
            }
        } 
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            sfbot.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return sfbot.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return sfbot.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: sfbot.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${sfbot.getName(i + '@s.whatsapp.net')}\n
FN:${sfbot.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@sfbot.my.id\n
item2.X-ABLabel:Email\n
item3.URL:https://profile.sfbotdev.xyz\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
            })
        }
        if (isCmd && !isUser) {
            _user.push(sender)
            fs.writeFileSync('./src/data/user.json', JSON.stringify(_user, null, 2))
        }
        
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<================>`)
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./src/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd
        }
        /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
        for (let Mwuhehe of Vnsfbot) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                sfbot.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of Stickersfbot) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                sfbot.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of Imagesfbot) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                sfbot.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of Videosfbot) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                sfbot.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: m
                })
            }
        }
        /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
        if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
            kuis = true
            var {
                server,
                frontaddr,
                session,
                signature,
                question,
                step
            } = akinator[m.sender.split('@')[0]]
            if (step == "0" && budy == "5") newReply("Maaf Anda telah mencapai pertanyaan pertama")
            var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
            var get_result = await fetchJson(ini_url)
            var get_result = get_result.result
            if (get_result.hasOwnProperty("name")) {
                var ini_name = get_result.name
                var description = get_result.description
                ini_txt = `${ini_name} - ${description}\n\n`
                ini_txt += "*Terima Kasih*\n*Powered By sfbotDev & LoL Human*"
                await sfbot.sendMessage(m.chat, {
                    image: {
                        url: get_result.image
                    },
                    caption: ini_txt
                }).then(() => {
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                return
            }
            var {
                question,
                _,
                step
            } = get_result
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak\n"
            ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            if (args[0] === '5') {
                var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                var {
                    question,
                    _,
                    step
                } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            }
            sfbot.sendText(m.chat, ini_txt, m).then(() => {
                const data_ = akinator[m.sender.split('@')[0]]
                data_["question"] = question
                data_["step"] = step
                akinator[m.sender.split('@')[0]] = data_
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
            })
        }
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await newReply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await sfbot.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // newReply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                newReply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) sfbot.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            sfbot.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
                sfbot.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
            }
        }
        switch (isCommand) {
            case 'status': {
            
                  if (!isCreator) return newReply(mess.owner)
                  if (args.length < 1) return newReply('perilah apa?')
                  if (q === 'image') {
                     let imgSw = await sfbot.downloadAndSaveMediaMessage(quoted)
                     await sfbot.sendMessage('status@broadcast', { image: { url: imgSw }, caption: q}, { statusJidList: _user })
                     newReply(mess.done)
                  } else if (/video/.test(mime)) {
                     let VidSw = await sfbot.downloadAndSaveMediaMessage(quoted)
                     await sfbot.sendMessage('status@broadcast', { video: { url: VidSw }, caption: q}, { statusJidList: _user })
                     newReply(mess.done)
                  } else if (/audio/.test(mime)) {
                     let VnSw = await sfbot.downloadAndSaveMediaMessage(quoted)
                     await sfbot.sendMessage('status@broadcast', { audio: { url: VnSw }, mimetype: 'audio/mp4', ptt:true },{ backgroundColor: '#FF000000', statusJidList: _user })
                     newReply(mess.done)
                  } else if (q) {
                     sfbot.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: _user });
                  } else {
                     newReply('Replay Media Jika Mau Dengan Caption Ketik .status caption')
                  }
               }
               break
            case 'autosimi':
            
               if (!isCreator) return newReply(mess.owner)
               if (args.length < 1) return newReply('perilah apa?')
               if (q == 'on') {
                  autosimi.push(from)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('Sukses mengaktifkan mode simi')
               } else if (q == 'off') {
                  autosimi.splice(from, 1)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('Sukes menonaktifkan mode simi')
               } else {
                  newReply('Agak Laen')
               }
            break
            case 'setimgqouted':
            case 'siq': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/quoted.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.mp4')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'addprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 2)
                    return newReply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    newReply("Sukses Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    newReply("Sukses Via Nomer")
                }
                break
            case 'delprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    }
                    newReply("Sukses Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    newReply("Sukses Via Nomer")
                }
                break
            case 'listprem': {
                if (!isCreator) return newReply(mess.owner)
                let data = require("./src/data/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Nomer : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                sfbot.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'delsesi':
            case 'clearsession': {
                if (!isCreator) return newReply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return newReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return newReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    newReply(teks)
                    await sleep(2000)
                    newReply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    newReply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return newReply(mess.owner)
                    if (!text) return newReply('Masukkan Link Group!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                    newReply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await sfbot.groupAcceptInvite(result).then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                } catch {
                    newReply('Gagal Masuk Ke Group')
                }
                break
            case 'cekapikey':
                if (!isCreator) return newReply(mess.owner)
                let g = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                newReply(q.result)
                break
            case 'ambilsesi':
            case 'getsesi':
                if (!isCreator) return newReply(mess.owner)
                newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
                let sesi = fs.readFileSync('./src/total-hit-user.json')
                sfbot.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'total-hit-user.json'
                }, {
                    quoted: m
                })
                break
            case 'myip':
            case 'ipbot':
                if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
                break
            case 'shutdown':
                if (!isCreator) return newReply(mess.owner)
                newReply(`Otsukaresama deshita🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return newReply(mess.owner)
                newReply('Proses....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    sfbot.public = true
                    newReply(mess.done)
                } else if (q == 'self') {
                    sfbot.public = false
                    newReply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return newReply(mess.owner)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await sfbot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await sfbot.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await sfbot.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return newReply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await sfbot.updateBlockStatus(blockw, 'block').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return newReply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await sfbot.updateBlockStatus(blockww, 'unblock').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'leave':
                if (!isCreator) return newReply(mess.owner)
                if (!m.isGroup) return newReply(mess.group)
                newReply('Dadah Semuanya 🥺')
                await sfbot.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return newReply(mess.owner)
                if (m.isGroup) return newReply(mess.private)
                newReply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await sfbot.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Text mana?\n\nContoh : ${prefix + command} Besok Libur `)
                let getGroups = await sfbot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    sfbot.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Telah Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'getcase':
            case 'ambilcase':
                if (!isCreator) return newReply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("sfbot.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                newReply(`${getCase(q)}`)
                break



                /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */

            case 'closetime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Close time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
                    sfbot.groupSettingUpdate(m.chat, 'announcement')
                    newReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Open time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
                    sfbot.groupSettingUpdate(m.chat, 'not_announcement')
                    newReply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await sfbot.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => newReply('✅ Berhasil Kick Member')).catch((err) => newReply('❎ Gagal Kick Member'))
                break
            case 'add':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await sfbot.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => newReply('✅ Berhasil Menambahkan Member')).catch((err) => newReply('❎ Gagal Menambakan Member'))
                break
            case 'promote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await sfbot.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => newReply('✅ Berhasil Promote')).catch((err) => newReply('❎ Gagal Promote'))
                break
            case 'demote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await sfbot.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => newReply('✅ Berhasil Demote')).catch((err) => newReply('❎ Gagal Demote'))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Text ?'
                await sfbot.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Text ?'
                await sfbot.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await sfbot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await sfbot.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await sfbot.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `╭━━━☉ ダ TAG FOR ADMIN ━━━☉ ダ
 
                  *MESSAGE: ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `◈ @${mem.id.split('@')[0]}\n`
                }
                sfbot.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                sfbot.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!isAdmins) return newReply(mess.admin)
                if (!m.quoted) return newReply(`Reply pesan dengan caption ${prefix + command}`)
                sfbot.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await sfbot.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'open') {
                    await sfbot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'open') {
                    await sfbot.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'close') {
                    await sfbot.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let response = await sfbot.groupInviteCode(m.chat)
                sfbot.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                await sfbot.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(json(err)))
                break
            case 'listonline':
            case 'liston':
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                sfbot.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
                break


                /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
            case 'daftar':
                if (isRegistered) return newReply('Kamu sudah terdaftar')
                if (!q.includes('|')) return newReply('Format salah!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return newReply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return newReply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return newReply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return newReply(`your age is too young minimum 12 years`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${m.sender.split("@")[0]}\n⭔ NS : ${serialUser}`
               thumb = fs.readFileSync("./media/menu.jpg")
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    sfbot.sendMessage(m.chat, {image: thumb, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    sfbot.sendMessage(m.chat, {image: thumb, caption: mzd}, {quoted: m})
                    
                }
		break
            case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await sfbot.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/05c3b67e766b157ca655f.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\n Ingin Beli Premium? Chat Saja Owner😉`
                await sfbot.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'BUY PREMIUM',
                            body: `15k / MONTH`,
                            thumbnailUrl: 'https://telegra.ph/file/c0cad5270a204eb878711.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'sewa':
            case 'sewabot':
                newReply(`Ketik ${prefix}owner Saja`)
                break
            case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) sfbot.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) sfbot.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`
                sfbot.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'RUNTIME',
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/e293453cd41317e7cf2a4.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                uy = `https://github.com/SatanTech/SFMDV1.1`
                sfbot.sendMessage(m.chat, {
                    text: uy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'Script Free',
                            body: `SCRIPT BOT ${namabot} Ada Di Youtube @sfbotdev`,
                            thumbnailUrl: 'https://telegra.ph/file/0720685135c68851ca869.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let katanya = `Hallo Kakak ${pushname}\n\nJika Ingin Berdonasi Menggunakan QRIS\n\n\n*NOTES:*\n 1.Bawa Bukti Telah Berdonasi Kepada Owner!!!\nSeberapa Pun Kakak Berdonasi Bagi Kami Sangat Berharga`
                sfbot.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/qris.jpg'),
                    caption: katanya
                }, {
                    quoted: m
                })
                break
            case "owner": {
                sfbot.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
            


                /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await sfbot.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await sfbot.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'smeme': {
                let respond = `Kirim/Reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return newReply(respond)
                if (!text) return newReply(respond)
                newReply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await sfbot.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
                let pop = await sfbot.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            /* case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await sfbot.downloadMediaMessage(qmsg)
                    let encmedia = await sfbot.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await sfbot.downloadMediaMessage(qmsg)
                    let encmedia = await sfbot.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            */
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await sfbot.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    sfbot.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`newReply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await sfbot.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await sfbot.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await sfbot.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                sfbot.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await sfbot.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                sfbot.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `sfbot-MD.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`newReply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await sfbot.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                sfbot.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`newReply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await sfbot.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await sfbot.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                newReply(mess.wait)
                let media = await sfbot.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'snobg': {
                let respond = `Kirim Atau Reply Gambar Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) return newReply(respond)
                let dwnld = await sfbot.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${fatGans}`
                let pop = await sfbot.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'emojimix2': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await sfbot.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'emojimix1': {
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await sfbot.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return newReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await sfbot.downloadAndSaveMediaMessage(quoted)
                    sfbot.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await sfbot.downloadAndSaveMediaMessage(quoted)
                    sfbot.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return newReply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await sfbot.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'detectqr': {
try {
newReply(mess.wait)
mee = await sfbot.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
newReply(util.format(data[0]))
} catch (err) {
newReply(`Reply Image Yang Ada Qr Nya`)
}
}
break
            case 'fliptext': {
                if (args.length < 1) return newReply(`Example:\n${prefix}fliptext sfbotDev`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                newReply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            /* ~~~~~~~~~  ~~~~~~~~~ */
    
                /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of Vnsfbot) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Vnsfbot.length}*`
                newReply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickersfbot) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickersfbot.length}*`
                newReply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagesfbot) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagesfbot.length}*`
                newReply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videosfbot) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videosfbot.length}*`
                newReply(teks)
            }
            break
            case 'addvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Videonya?')
                if (Videosfbot.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                Videosfbot.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(Videosfbot))
                fs.unlinkSync(delb)
                newReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Video')
                if (!Videosfbot.includes(q)) return newReply("Nama Tidak Ada Di Dalam Database")
                let wanu = Videosfbot.indexOf(q)
                Videosfbot.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(Videosfbot))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                newReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Imagenya?')
                if (Imagesfbot.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                Imagesfbot.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(Imagesfbot))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Imagenya')
                if (!Imagesfbot.includes(q)) return newReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = Imagesfbot.indexOf(q)
                Imagesfbot.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(Imagesfbot))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                newReply(`Suksed Menghapus Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya?')
                if (Stickersfbot.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                Stickersfbot.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(Stickersfbot))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya')
                if (!Stickersfbot.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = Stickersfbot.indexOf(q)
                Stickersfbot.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(Stickersfbot))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                newReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya?')
                if (Vnsfbot.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await sfbot.downloadAndSaveMediaMessage(quoted)
                Vnsfbot.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(Vnsfbot))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya')
                if (!Vnsfbot.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = Vnsfbot.indexOf(q)
                Vnsfbot.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(Vnsfbot))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                newReply(`Sukses Menghapus Audio ${q}`)
            }
            break




            /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply('Kamu masih didalam game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    newReply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await sfbot.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await sfbot.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        sfbot.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        newReply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    newReply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) newReply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return newReply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return newReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`, m.chat, {
                    mentions: [_owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return newReply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await sfbot.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) sfbot.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./lib/math')
                if (!text) return newReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh _useran: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                sfbot.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    newReply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    sfbot.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        sfbot.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'akinator':
                newReply(`Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran Pengguna permainan ini melalui serentetan pertanyaan.\n\n~> ${prefix}akinatorstart : Untuk memulai\n~> ${prefix}akinatorstop : Untuk berhenti`)
                break
            case 'akinatorstart':
                if (!isPremium) return newReply(mess.prem)
                if (m.isGroup) return newReply(mess.private)
                if (akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Selesein yg sebelumnya dulu atuh")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`)
                let {
                    server, frontaddr, session, signature, question, step
                } = get_result.result
                const data = {}
                data["server"] = server
                data["frontaddr"] = frontaddr
                data["session"] = session
                data["signature"] = signature
                data["question"] = question
                data["step"] = step
                imi_txt = `${question}\n\n`
                imi_txt += "0 - Ya\n"
                imi_txt += "1 - Tidak\n"
                imi_txt += "2 - Saya Tidak Tau\n"
                imi_txt += "3 - Mungkin\n"
                imi_txt += "4 - Mungkin Tidak"
                sfbot.sendText(m.chat, imi_txt, m).then(() => {
                    akinator[m.sender.split('@')[0]] = data
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                break
            case 'akinatorstop':
                if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[m.sender.split('@')[0]]
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                newReply("Success mengcancel akinator sebelumnya")
                break

            case 'afk':
                if (!m.isGroup) return newReply(mess.group)
                if (isAfkOn) return newReply("Kakak Sudah Afk Sebelumnya")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                newReply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)
                break
       
            case 'tiktok':
            case 'tiktok':
                if (!q) return newReply('where is the link')
                let e = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lol}&url=${q}`)
                let ee = `*DOWNLOADER TIKTOK*\n\n_Creator:_ ${e.result.author.username} / (${e.result.author.nickname}\n_Title:_ ${e.result.title}\n_Durasi:_ ${e.result.duration}\n_Views:_ ${e.result.statistic.play_count}_Likes:_ ${e.result.statistic.like_count}\n`
                await sfbot.sendMessage(m.chat, {
                    video: {
                        url: e.result.link
                    },
                    caption: ee
                }, {
                    quoted: m
                })
                break

            case 'tiktokaudio':
            case 'tiktokaudio': {
                if (!q) return newReply('where is the link')
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${q}`)
                sfbot.sendMessage(m.chat, {
                    audio: {
                        url: i.result
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })
            }
            break
/* ~~~~~~~~~~~~~~~~ QUOTES ~~~~~~~~~~~~~~~~ */
case 'kataanime':
case 'katanime': {
newReply(mess.wait)
  var ktnime = await fetchJson(`https://api.zahwazein.xyz/searching/animequotes?query=naruto&apikey=${zahwa}`)
ress = `
Anime : ${ktnime.result.anime}
Karakter : ${ktnime.result.character}
Episode : ${ktnime.result.episode}
Quotes : *${ktnime.result.quotes}*
`
logo = `${ktnime.result.thumb}`

sfbot.sendMessage(m.chat, {
text: ress,
contextInfo: {
externalAdReply: {
title: 'Kata Anime',
body: 'By Admin SF',
thumbnailUrl: logo,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

case 'katadilan': {
newReply(mess.wait)
  var dilan = await fetchJson(`https://api.betabotz.org/api/random/katadilan?apikey=${beta}`)
sfbot.sendMessage(m.chat, {
text: dilan.dilan,
contextInfo: {
externalAdReply: {
title: 'Kata Dilan',
body: 'By Admin SF',
thumbnailUrl: "https://telegra.ph/file/2f022a0dfe5595fba3f17.jpg",
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

case 'bucin': {
newReply(mess.wait)
  var textbu = await fetchJson(`https://api.betabotz.org/api/random/katabucin?apikey=${beta}`)
sfbot.sendMessage(m.chat, {
text: textbu.bucin,
contextInfo: {
externalAdReply: {
title: 'Kata Bucin',
body: 'By Admin SF',
thumbnailUrl: "https://telegra.ph/file/b6414441ff9dacb3e840c.jpg",
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

case 'katabijak': {
newReply(mess.wait)
  var textb = await fetchJson(`https://api.betabotz.org/api/random/bijak?apikey=${beta}`)
sfbot.sendMessage(m.chat, {
text: textb.result,
contextInfo: {
externalAdReply: {
title: 'Kata Bijak',
body: 'By Admin SF',
thumbnailUrl: "https://telegra.ph/file/35c34b78ae2443ff3dd92.jpg",
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

case 'katasenja': {
newReply(mess.wait)
  var texts = await fetchJson(`https://api.betabotz.org/api/random/katasenja?apikey=${beta}`)
sfbot.sendMessage(m.chat, {
text: texts.senja,
contextInfo: {
externalAdReply: {
title: 'Kata Senja',
body: 'By Admin SF',
thumbnailUrl: "https://telegra.ph/file/d1ba6435cca1e46a62d3e.jpg",
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
            case 'ai':
case 'openai': {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
newReply(mess.wait)
  var js = await fetchJson(`https://api.betabotz.org/api/search/openai-chat?text=${text}&apikey=${beta}`)
anj = `
Pertanyaan : ${text}

Jawaban : ${js.message}
`
sfbot.sendMessage(m.chat, {
text: anj,
contextInfo: {
externalAdReply: {
title: 'Chat GPT',
body: 'By Admin SF',
thumbnailUrl: "https://telegra.ph/file/7a385897829927b981dfa.jpg",
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break
            case 'cocofun':
                if (!q) return newReply('where is the link')
                let j = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lol}&url=${q}`)
                sfbot.sendMessage(m.chat, {
                    video: {
                        url: j.result.nowm
                    },
                    caption: j.result.tag
                }, {
                    quoted: m
                })
                break
case 'mediafire': {
if (!q) return newReply('where is the link')
newReply(mess.wait)
let ha = await fetchJson(`https://api.betabotz.org/api/download/mediafire?url=${q}&apikey=${beta}`)
ingfoo = `
Nama File : ${ha.result.filename}
Type File : ${ha.result.filetype}
Ekstensi : ${ha.result.ext}
Size : ${ha.result.filesizeH}

`
await sfbot.sendMessage(m.chat, {
document: {
   url: ha.result.url
},
mimetype: '*/*',
fileName: ha.result.filename,
caption: ingfoo,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'MEDIAFIRE DOWNLOAD',
body: '',
thumbnailUrl: thumb,
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: true
    }
}
    }, {
quoted: m
    })
    }
    break
            
            case 'snackvideo':
            case 'sv':
                if (!q) return newReply('where is the link')
                let ma = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=${lol}&url=${q}`)
                sfbot.sendMessage(m.chat, {
                    video: {
                        url: ma.result.url
                    },
                    caption: ma.result.caption
                }, {
                    quoted: m
                })
                break

            case 'igdl': 
            case 'ig':
            case 'instagram': {
                if (!q) return newReply("Link?")
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await sfbot.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break
            
            case 'igdlh':
            case 'highlights': {
                if (!q) return newReply('Link?')
                let ap = await fetchJson(`https://api.lolhuman.xyz/api/ig-highlights?apikey=${lol}&url=${q}`)
                for (var oa = 0; oa < ap.result.length; oa++) {
                    let pap = ap.result[oa].includes('.jpg') ? 'image' : 'video'
                    await sfbot.sendMessage(m.chat, {
                        [pap]: {
                            url: ap.result[oa]
                        },
                        caption: ''
                    }, {
                        quoted: m
                    })
                }
            }
            break


            case 'qc': {
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await sfbot.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            sfbot.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
            case 'ttp':
                if (!q) return newReply('Masukan Text')
                newReply(mess.wait)
                sfbot.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/ttp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break
            case 'attp':
                if (!q) return newReply('Masukan Text')
                newReply(mess.wait)
                sfbot.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break

            case 'tohd':
            case 'hd':
            case 'remini': {
			if (!quoted) return newReply(`Where is the picture?`)
			if (!/image/.test(mime)) return newReply(`Send/Reply Photos With Captions ${prefix + command}`)
			newReply(mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			sfbot.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
            
          /*  case 'recolor': {
                if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Where The A Image")
                let media = await sfbot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                await sfbot.sendMessage(m.chat, {
                    image: {
                        url: `https://xzn.wtf/api/colorizer?url=${anu}&&apikey=${xzn}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break*/
            case 'removebg':
            case 'nobg': {
                if (!isMedia) return newReply("Where The A Image")
                let media = await sfbot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                sfbot.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break

            case 'tele':
            case 'telestick': {
                if (!isPremium) return newReply(mess.prem)
                if (!q) return newReply("Link?")
                let agg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${q}`)
                for (var ki = 0; ki < agg.result.sticker.length; ki++) {
                    await sfbot.sendImageAsSticker(m.chat, agg.result.sticker[ki], m, {
                        packname: packname,
                        author: author
                    })
                }
            }
            break

            case 'bass':
            case 'blown':
            case 'deep':
            case 'earrape':
            case 'fast':
            case 'fat':
            case 'nightcore':
            case 'reverse':
            case 'robot':
            case 'slow':
            case 'smooth':
            case 'tupai': {
                try {
                    let set
                    if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        newReply(mess.wait)
                        let media = await sfbot.downloadAndSaveMediaMessage(qmsg)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return newReply(err)
                            let buff = fs.readFileSync(ran)
                            sfbot.sendMessage(m.chat, {
                                audio: buff,
                                mimetype: 'audio/mpeg'
                            }, {
                                quoted: m
                            })
                            fs.unlinkSync(ran)
                        })
                    } else newReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                    newReply(e)
                }
            }
            break
            case 'totalfitur':
        case 'fitur': {
tofit = `
Total Fitur ${namabot} Saat Ini ${totalFitur()}
`
sfbot.sendMessage(m.chat, {
text: tofit,
contextInfo: {
externalAdReply: {
title: 'Total Fitur',
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
/* ~~~~~~~~~~~~~~~ MAKER ~~~~~~~~~~~~~~~~~ */
case'toanime': case 'jadianime': {
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await sfbot.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
sfbot.sendMessage(m.chat, { image: { url: `https://xzn.wtf/api/toanime?url=${anu}&apikey=${xzn}` }, caption: `Selesai Kak By _${namabot}_`}, { quoted: m})
}
break
            
case'tozombie': case 'jadizombie': {
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media = await sfbot.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
sfbot.sendMessage(m.chat, { image: { url: `https://api.betabotz.org/api/maker/jadizombie?url=${anu}&apikey=${beta}` }, caption: `Selesai Kak By _${namabot}_`}, { quoted: m})
}
break
            
//////////// ANTILINKK /////////////

case 'antilinkgc': {
if (!m.isGroup) return newReply(mess.group)
if (!isBotAdmins) return newReply(mess.botAdmin)
if (!isAdmins && !isCreator) return newReply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return newReply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
newReply('Sukses mengaktifkan antilinkgc di group')
var groupe = await sfbot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sfbot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak seorang pun diperbolehkan mengirim tautan grup di grup ini, siapa pun yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return newReply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
newReply('Sukses mematikan antilinkgc di grup ini')
} else {
await newReply(`Masukan Pilihan\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
  
case 'antilinkgc2': {
if (!m.isGroup) return newReply(mess.group)
if (!isBotAdmins) return newReply(mess.botAdmin)
if (!isAdmins && !isCreator) return newReply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc2) return newReply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc2.json', JSON.stringify(ntlinkgc))
newReply('Sukses mengaktifkan antilinkgc2 di group')
var groupe = await sfbot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sfbot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak seorang pun diperbolehkan mengirim tautan grup di grup ini, jika ada yang mengirim makan link nya akan di hapus!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc2) return newReply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc2.json', JSON.stringify(ntlinkgc))
newReply('Sukses mematikan antilinkgc2 di grup ini')
} else {
await newReply(`Masukan Pilihan\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non untuk mengaktifkan\noff untuk menonaktifkan`)
  }
  }
  break
/* ~~~~~~~~~~~~~~~ CERPEN ~~~~~~~~~~~~~~~~~ */
case 'cerpenjepang': {
newReply(mess.wait)
let jepang = await fetchJson(`https://api.betabotz.org/api/story/cerpen?type=jepang&apikey=${beta}`)
jepp = `
title: ${jepang.result.title}
author: ${jepang.result.author}
cerita: ${jepang.result.cerita}
`
sfbot.sendMessage(m.chat, {
text: jepp,
contextInfo: {
externalAdReply: {
title: 'Cerpen Jepang',
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
/* ~~~~~~~~~~~ MENU  DOWNLOAD ~~~~~~~~~~~~~ */

case 'git': case 'gitclone':
if (!args[0]) return newReply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    sfbot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => newReply(mess.error))
break
/* ~~ */
case 'yts':
case 'ytsearch': {
if (!text) return newReply(`Example : ${prefix + command} bebende `)
newReply(mess.wait)
var hasil = await fetchJson(`https://api.zahwazein.xyz/searching/ytsearch?query=${text}&apikey=${zahwa}`)
hsc = `
*❖ Title:* ${hasil.result.title}
*❖ Durasi:* ${hasil.result.timestamp}
*❖ View:* ${hasil.result.views}
*❖ Publish:* ${hasil.result.ago}
*❖ Url:* ${hasil.result.url}
╰━━━━━━━━━━━━━━☉
`
sfbot.sendMessage(m.chat, {
text: hsc,
contextInfo: {
externalAdReply: {
title: 'Youtube Search',
thumbnailUrl: `${hasil.result.thumbnail}`,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'ytplay':
case 'play': {
if (!text) return newReply(`Example : ${prefix+command} story wa anime`)
newReply(mess.wait)
let audio = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-play-video?q=${text}&apikey=${apikeys}`)
let video = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-play-audio?q=${text}&apikey=${apikeys}`)
ngen = `
Title : ${video.data.title}
Channel : ${video.data.channel}
Viewers : ${video.data.views}
Upload At : ${video.data.published}

`
await sfbot.sendMessage(m.chat, {
audio: {
   url: audio.data.url
},
mimetype: 'audio/mp4',
fileName: "sfmd.mp3",
caption: ngen,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        title: 'YT PLAY',
        body: '',
        thumbnailUrl: `${audio.data.thumb}`,
        sourceUrl: global.link,
        mediaType: 1,
        renderLargerThumbnail: true
    }
}
                       
                    }, {
quoted: m
                    })
            }
            break

case 'ytv':
case 'ytmp4': 
case 'ytvideo': {
if (!q) return newReply(`Example : ${prefix + command} https://youtube.com/channel/UC_5iLk7KvfsHW4CIWFyzas`)
newReply(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-video?url=${q}&apikey=${apikeys}`)
await sfbot.sendMessage(m.chat, { video: {url: anu.data.url }, caption: `
*❖ Title:* ${anu.data.title}
*❖ Channel:* ${anu.data.channel}
*❖ Upload:* ${anu.data.published}
*❖ Viewers:* ${anu.data.views}` },{ quoted:m })
}
break

case 'ytmp3': {
if (!q) return newReply('where is the link')
newReply('Tunggu beberapa menit dan media akan dikirim')
let n = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
let ytmp4p = `Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}`
await sfbot.sendMessage(m.chat, {
    audio: {
        url: n.result.link.link
    },
    mimetype: 'audio/mp3',
    fileName: "Downloader Ytmp3 By SFMD.mp3",
    caption: ytmp4p,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: n.result.title,
            body: '',
            thumbnailUrl: n.result.thumbnail,
            sourceUrl: global.link,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, {
    quoted: m
})
}
break
/* ~~~~~~~~~~~~~~ SEARCH MENU ~~~~~~~~~~~~~~~~~ */
case 'lirik':
case 'liriklagu': {
if (!text) return newReply(`Example ${prefix + command} Semata Karena mu`)
newReply(mess.wait)
var lirik = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lol}&query=${text}`)
sfbot.sendMessage(m.chat, {
text: lirik.result,
contextInfo: {
externalAdReply: {
title: `Lirik Lagu ${text}`,
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break

case 'chord':
case 'chordlagu': {
if (!text) return newReply(`Example ${prefix + command} Semata Karena mu`)
newReply(mess.wait)
var chord = await fetchJson(`https://api.zahwazein.xyz/searching/chordlagu?query=${text}&apikey=${zahwa}`)

sfbot.sendMessage(m.chat, {
text: chord.result.chord,
contextInfo: {
externalAdReply: {
title: `Chord Lagu ${text}`,
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break

case 'jadwaltv': {
if (!text) return newReply(`Example ${prefix + command} rcti`)
newReply(mess.wait)
var jadwaltv = await fetchJson(`https://api.zahwazein.xyz/searching/jadwaltv?query=${text}&apikey=${zahwa}`)
jtv = `
Waktu : ${jadwaltv.result.jadwal.time}
Acara : ${jadwaltv.result.jadwal.acara}
`
sfbot.sendMessage(m.chat, {
text: jtv,
contextInfo: {
externalAdReply: {
title: `Jadwal TV ${text}`,
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break

case 'pinterest': {
if (!text) return newReply(`Example: ${prefix + command} Naruto`)
newReply(mess.wait)
woee = `Pinterest
Pencarian: ${text}
By ${namabot}`
await sfbot.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/searching/pinterest2?query=${text}&apikey=${zahwa}`}, caption: woee })
}
break

case 'gimage': {
if (!text) return newReply(`Example: ${prefix + command} Naruto`)
newReply(mess.wait)
woee = `Google Image
Pencarian: ${text}
By ${namabot}`
await sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/gimage?apikey=${lol}&query=${text}`}, caption: woee })
}
break
/* ~~~~~~~~~~~~~~~~ TEXT PRO ~~~~~~~~~~~~~~~~~~~~ */
case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} SFMD`)
			newReply(mess.wait)
			sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lol}&text=${args}`}, caption: `Created By _${namabot}_\nType: ${command}\nText: ${args}`})
			}
			break
// Ephoto1
	    case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} SFMD `)
			newReply(mess.wait)
			sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lol}&text=${args}`}, caption: `Created By _${namabot}_\nType: ${command}\nText: ${args}`})
			}
			break
//// textprome
case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} SFMD`)
			newReply(mess.wait)
			sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${args}` }, caption: `Created By _${namabot}_\nType: ${command}\nText: ${args}`})
			}
			break
			
		case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} SFMD`)
			newReply(mess.wait)
			sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lol}&text1=${args[0]}&text2=${args[1]}`}, caption: `Created By _${namabot}_\nType: ${command}\nText: ${args}`})
			}
			break
/* ~~~~~~~~~~~~~~~~~ ISLAMIC ~~~~~~~~~~~~~~~~~~~~~ */
case 'kisahnabi': {
if (!text) return newReply(`Example ${prefix + command} muhammad`)
newReply(mess.wait)
let kisahn = await fetchJson(`https://api.zahwazein.xyz/islami/kisahnabi/${text}?apikey=${zahwa}`)
kisah = `
Nama Nabi : ${kisahn.result.name}
Umur : ${kisahn.result.age} Tahun
Tempat Lahir : ${kisahn.result.place}\n
Cerita : ${kisahn.result.story}
`
sfbot.sendMessage(m.chat, {
text: kisah,
contextInfo: {
externalAdReply: {
title: `Cerita Nabi ${text}`,
thumbnailUrl: `${kisahn.result.image}`,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break

case 'asmaulhusna': {
newReply(mess.wait)
let asmaul = await fetchJson(`https://api.zahwazein.xyz/islami/asmaulhusna?apikey=${zahwa}`)
kisah = `
Arab : ${asmaul.result.arabic}
Latin : ${asmaul.result.latin}
Nomor : ${asmaul.result.index}
Artinya : *${asmaul.result.translation_id}*
`
sfbot.sendMessage(m.chat, {
text: kisah,
contextInfo: {
externalAdReply: {
title: `Asmaul Husna`,
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break

case 'kisahmuslim': {
newReply(mess.wait)
let kisahm = await fetchJson(`https://api.zahwazein.xyz/islami/kisahmuslim?apikey=${zahwa}`)
kisah = `
Judul : ${kisahm.result.Judul}\n
Cerita : ${kisahm.result.Cerita}
`
sfbot.sendMessage(m.chat, {
text: kisah,
contextInfo: {
externalAdReply: {
title: `Kisah Muslim`,
thumbnailUrl: `${kisahm.result.Thumb}`,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break
/* ~~~~~~~~~~~~~~~ INFORMATION ~~~~~~~~~~~~~~~~~~~ */
case 'cuaca': {
if (!text) return newReply(`Example ${prefix + command} rcti`)
newReply(mess.wait)
var cuaca = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${lol}`)
logcu = `
Daerah : ${cuaca.result.tempat}
latitude : ${cuaca.result.latitude}
longitude : ${cuaca.result.longitude}
Cuaca : ${cuaca.result.cuaca}
Angin : ${cuaca.result.angin}
Deskripsi : ${cuaca.result.description}
Kelembaban : ${cuaca.result.kelembapan}
Suhu : ${cuaca.result.suhu}
Udara : ${cuaca.result.udara}
Permukaan Laut : ${cuaca.result.permukaan_laut}
`
sfbot.sendMessage(m.chat, {
text: logcu,
contextInfo: {
externalAdReply: {
title: `Cuaca ${text}`,
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break
case 'infogempa':
let k = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
newReply(mess.wait)
var caption = `Lokasi : ${k.result.lokasi}\n`
caption += `Waktu : ${k.result.waktu}\n`
caption += `Potensi : ${k.result.potensi}\n`
caption += `Magnitude : ${k.result.magnitude}\n`
caption += `Kedalaman : ${k.result.kedalaman}\n`
caption += `Koordinat : ${k.result.koordinat}`
await sfbot.sendMessage(m.chat, {
    image: {
url: k.result.map
    },
    caption
}, {
    quoted: m
})
break

case 'wikipedia': {
if (!q) return newReply(`Example: ${prefix + command} Bumi`)
newReply(mess.wait)
let wikii = await fetchJson(`https://api.zahwazein.xyz/information/wikipedia?query=${q}&apikey=${zahwa}`)
wik = `
Hasil Pencarian: ${wikii.result.judul}\n
${wikii.result.isi}
`
sfbot.sendMessage(m.chat, {
text: wik,
contextInfo: {
externalAdReply: {
title: `Wikipedia ${q}`,
thumbnailUrl: thumb,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break
/* ~~~~~~~~~~~~~~ RANDOM IMAGE ~~~~~~~~~~~~~~~ */
case 'patrick':
case 'meme':
case 'memeindo':
case 'wallhp':
case 'profile':
case 'darkjoke': {
newReply(mess.wait)
sfbot.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=${zahwa}`}, caption: `Random image for ${command}\nBy Admin SF`})
}
break
/* ~~~~~~~~~~~~~ CREATOR IMAGE ~~~~~~~~~~~~~ */
	        case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucincert':
				if (args.length == 0) return newReply(`Example: ${prefix + command} Justimun Kentod`)
				newReply(mess.wait)
				kueri = args.join(" ")
                sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${lol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'tololsert':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Justimun Kentod`)
			newReply(mess.wait)
			ytta = args.join(" ")
            sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${lol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'pacarsertifikat':
			case 'pacarcert':
            if (args.length == 0) return newReply(`Usage: ${prefix + command} nama1|nama2`)
            newReply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
			    titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            sfbot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${lol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
/* ~~~~~~~~~~~~~ PUSHKONTAK ~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~ JADI  ANIME ~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
            case 'menu':
            case 'help': {
            
                let menunya = `
Hello

╭━━━☉ ダ USER INFO
◈ User : ${pushname}
◈ Number : ${m.sender.split('@')[0]}
◈ Status : ${isPremium ? "Premium" : "Free" }
◈ Register : ${isRegistered ? "✅" : "❎" }
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ BOT INFO
◈ Bot Name : ${namabot}
◈ Created : ${namaowner}
◈ Runtime : ${runtime(process.uptime())}
◈ Total Fitur : ${totalFitur()}
◈ Total User: ${Object.keys(_user).length} User
◈ Total Hit : ${JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd} Hit
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
╰━━━━━━━━━━━━━━☉

╭━━━☉ ダ Owner Menu
◈ ${prefix}delsesi
◈ ${prefix}setimgqouted
◈ ${prefix}setimgmenu
◈ ${prefix}setvidmenu
◈ ${prefix}setmenu
◈ ${prefix}setreplay
◈ ${prefix}cekapikey
◈ ${prefix}join
◈ ${prefix}ipserver
◈ ${prefix}shutdown  
◈ ${prefix}restart
◈ ${prefix}autoread *[option]*
◈ ${prefix}autobio *[option]*
◈ ${prefix}mode *[option]*
◈ ${prefix}setwm 
◈ ${prefix}setppbot
◈ ${prefix}block
◈ ${prefix}unblock 
◈ ${prefix}backup
◈ ${prefix}getcase
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Convert Sound
◈ ${prefix}bass
◈ ${prefix}blown
◈ ${prefix}deep
◈ ${prefix}arrape
◈ ${prefix}fast
◈ ${prefix}fat
◈ ${prefix}nightcore
◈ ${prefix}reverse
◈ ${prefix}robot
◈ ${prefix}slow
◈ ${prefix}smooth
◈ ${prefix}tupai
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Photoproxy Menu
◈ ${prefix}shadow
◈ ${prefix}cup
◈ ${prefix}cup1
◈ ${prefix}romance
◈ ${prefix}smoke
◈ ${prefix}burnpaper
◈ ${prefix}lovemessage
◈ ${prefix}undergrass
◈ ${prefix}love
◈ ${prefix}coffe
◈ ${prefix}woodheart
◈ ${prefix}woodenboard
◈ ${prefix}summer3d
◈ ${prefix}wolfmetal
◈ ${prefix}nature3d
◈ ${prefix}underwater
◈ ${prefix}golderrose
◈ ${prefix}summernature
◈ ${prefix}letterleaves
◈ ${prefix}glowingneon
◈ ${prefix}fallleaves
◈ ${prefix}flamming
◈ ${prefix}harrypotter
◈ ${prefix}carvedwood
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Ephoto Menu
◈ ${prefix}wetglass
◈ ${prefix}multicolor3d
◈ ${prefix}watercolor
◈ ${prefix}luxurygold
◈ ${prefix}galaxywallpaper
◈ ${prefix}lighttext
◈ ${prefix}beautifulflower
◈ ${prefix}puppycute
◈ ${prefix}royaltext
◈ ${prefix}heartshaped
◈ ${prefix}birthdaycake
◈ ${prefix}galaxystyle
◈ ${prefix}hologram3d
◈ ${prefix}greenneon
◈ ${prefix}glossychrome
◈ ${prefix}greenbush
◈ ${prefix}metallogo
◈ ${prefix}noeltext
◈ ${prefix}glittergold
◈ ${prefix}textcake
◈ ${prefix}starsnight
◈ ${prefix}wooden3d
◈ ${prefix}textbyname
◈ ${prefix}writegalacy
◈ ${prefix}galaxybat
◈ ${prefix}snow3d
◈ ${prefix}birthdayday
◈ ${prefix}goldplaybutton
◈ ${prefix}silverplaybutton
◈ ${prefix}freefire
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Textproxy Menu
◈ ${prefix}blackpink
◈ ${prefix}neon
◈ ${prefix}greenneon
◈ ${prefix}advanceglow
◈ ${prefix}futureneon
◈ ${prefix}sandwriting
◈ ${prefix}sandsummer
◈ ${prefix}sandengraved
◈ ${prefix}metaldark
◈ ${prefix}neonlight
◈ ${prefix}holographic
◈ ${prefix}text1917
◈ ${prefix}minion
◈ ${prefix}deluxesilver
◈ ${prefix}newyearcard
◈ ${prefix}bloodfrosted
◈ ${prefix}halloween
◈ ${prefix}jokerlogo
◈ ${prefix}fireworksparkle
◈ ${prefix}natureleaves
◈ ${prefix}bokeh
◈ ${prefix}toxic
◈ ${prefix}strawberry
◈ ${prefix}box3d
◈ ${prefix}roadwarning
◈ ${prefix}breakwall
◈ ${prefix}icecold
◈ ${prefix}luxury
◈ ${prefix}cloud
◈ ${prefix}summersand
◈ ${prefix}horrorblood
◈ ${prefix}thunder
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Textproxy2 Menu
◈ ${prefix}pornhub *[text text]*
◈ ${prefix}glitch
◈ ${prefix}avenger
◈ ${prefix}space
◈ ${prefix}ninjalogo
◈ ${prefix}marvelstudio
◈ ${prefix}lionlogo
◈ ${prefix}wolflogo
◈ ${prefix}steel3d
◈ ${prefix}wallgravity
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Kata Menu
◈ ${prefix}bucin
◈ ${prefix}katanime
◈ ${prefix}katadilan
◈ ${prefix}katasenja
◈ ${prefix}katabijak
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Random Image Menu
◈ ${prefix}darkjoke
◈ ${prefix}meme
◈ ${prefix}memeindo
◈ ${prefix}patrick
◈ ${prefix}wallhp
◈ ${prefix}profile
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Premiun Menu
◈ ${prefix}remini
◈ ${prefix}ai
◈ ${prefix}toanime
◈ ${prefix}tozombie *[error]*
◈ ${prefix}telestick
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Search Menu
◈ ${prefix}liriklagu
◈ ${prefix}chordlagu
◈ ${prefix}jadwaltv *[error]*
◈ ${prefix}pinterest
◈ ${prefix}gimage
◈ ${prefix}ytsearch *[error]*
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Islamic Menu
◈ ${prefix}kisahnabi
◈ ${prefix}asmaulhusna
◈ ${prefix}kisahmuslim
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Cerpen Menu
◈ ${prefix}cerpenjepang
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Group Menu
◈ ${prefix}closetime
◈ ${prefix}opentime
◈ ${prefix}kick
◈ ${prefix}add
◈ ${prefix}promote
◈ ${prefix}demote
◈ ${prefix}setdecs
◈ ${prefix}setppgc
◈ ${prefix}tagall
◈ ${prefix}hidetag
◈ ${prefix}totag
◈ ${prefix}antilinkgc
◈ ${prefix}antilinkgc2
◈ ${prefix}gruop *[option]*
◈ ${prefix}editinfo
◈ ${prefix}linkgc
◈ ${prefix}revoke
◈ ${prefix}listonline *[error]*
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Main Menu
◈ ${prefix}botstatus 
◈ ${prefix}buypremium
◈ ${prefix}sewabot
◈ ${prefix}speedtest
◈ ${prefix}runtime
◈ ${prefix}script
◈ ${prefix}donate
◈ ${prefix}owner
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Information
◈ ${prefix}infogempa
◈ ${prefix}cuaca
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Convert Menu
◈ ${prefix}sticker
◈ ${prefix}smeme
◈ ${prefix}swm *[error]*
◈ ${prefix}snobg
◈ ${prefix}toimage
◈ ${prefix}tovideo
◈ ${prefix}toaudio
◈ ${prefix}tomp3
◈ ${prefix}tovn
◈ ${prefix}togif
◈ ${prefix}tourl
◈ ${prefix}toqr
◈ ${prefix}detectqr
◈ ${prefix}toviewonce
◈ ${prefix}fliptext
◈ ${prefix}emojimix1
◈ ${prefix}emojimix2
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Database Menu
◈ ${prefix}addvideo
◈ ${prefix}addimage
◈ ${prefix}addsticker
◈ ${prefix}addvn
◈ ${prefix}delvideo
◈ ${prefix}delimage
◈ ${prefix}delsticker
◈ ${prefix}delvn
◈ ${prefix}listvideo
◈ ${prefix}listimage
◈ ${prefix}liststicker
◈ ${prefix}listvn
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Game Menu
◈ ${prefix}tictactoe
◈ ${prefix}suitpvp
◈ ${prefix}kuismath
◈ ${prefix}tebak gambar
◈ ${prefix}tebak kata
◈ ${prefix}tebak kalimat
◈ ${prefix}tebak lirik
◈ ${prefix}tebak tebakan
◈ ${prefix}tebak bendera
◈ ${prefix}tebak bendera2
◈ ${prefix}tebak kabupaten
◈ ${prefix}tebak kimia
◈ ${prefix}tebak asahotak
◈ ${prefix}tebak siapakahaku
◈ ${prefix}tebak susunkata
◈ ${prefix}tebak tekateki
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Downloader
◈ ${prefix}gitclone
◈ ${prefix}tiktok
◈ ${prefix}tiktokaudio
◈ ${prefix}cocofun
◈ ${prefix}mediafire *[error]
◈ ${prefix}snackvideo
◈ ${prefix}ytmp3
◈ ${prefix}ytmp4
◈ ${prefix}play 
◈ ${prefix}igdl
◈ ${prefix}igdlh
╰━━━━━━━━━━━━━━☉
╭━━━☉ ダ Other Menu
◈ ${prefix}tololsertifikat
◈ ${prefix}bucinsertifikat
◈ ${prefix}pacarsertifikat
◈ ${prefix}qc *[error]*
◈ ${prefix}ttp
◈ ${prefix}attp
◈ ${prefix}removebg
╰━━━━━━━━━━━━━━☉`
                if (typemenu === 'v1') {
                    sfbot.sendMessage(m.chat, {
                        image: fs.readFileSync('./media/menu.jpg'),
                        caption: menunya
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    sfbot.sendMessage(m.chat, {
                        text: menunya,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `Bot Created By ${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    sfbot.sendMessage(m.chat, {
                        video: fs.readFileSync('./media/menu.mp4'),
                        caption: menunya,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    sfbot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: menunya
                        }
                    }, {})
                }
                }
                break
            default:
                  if (isSimi && body != undefined) {
                     // res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${body}&badword=true`)
                     res = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
                     newReply(res.success)
                  }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
        }
    } catch (err) {
        sfbot.sendText(numberowner + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
