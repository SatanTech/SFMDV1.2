/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require('fs')
const chalk = require('chalk')
/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.APIs = {
	beta: 'https://api.betabotz.org',
	apikeys: 'https://api.xyroinee.xyz',
}

// Apikey
global.APIKeys = {
	'https://api.betabotz.org': 'AdminSF752',
	'https://api.xyroinee.xyz': '3Vmnf2IVNp',
}
/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = 'AdminSF752' // https://api.lolhuman.xyz
global.zahwa = 'zenzkey_1c982eff5b'
global.xzn = 'sfusion' // https://xnz.wtf
global.beta = 'AdminSF752'
global.apikeys = '3Vmnf2IVNp'
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6282114542876' // Owner Utama
global.owner = ['6282114542876', '6282114542876'] // Owner Lainnya
global.namaowner = 'Admin SF' // Nama Owner
global.premium = ["6282114542876", "6283195171309"] // Premium User
global.nobot = '6283195171309'
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'SF-MD' // NickBot
global.typemenu = 'v2' // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = 'v1' // 'v1' > 'v2'
global.autoread = false // ReadChat
global.autobio = false // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = 'Created By' // Watermark Sticker
global.author = 'SF-MD' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Done ✅',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 10,
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chat.whatsapp.com/gadaaa'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
