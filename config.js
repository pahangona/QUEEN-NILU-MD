/*
WHATSAPP BOT BY themiya dilan
WHATSAPP - 94777839446
SUPPORT GROUP - https://t.me/themiyadilangroup
YOUTUBE - https://youtube.com/@Themiya_Dilan?si=K6rzP-v9T5b3RFvB
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = '' /QueenNilu;;;wzpjGARB#ImLRVRjVNMVzhVx2p5M8YUbRYuN7K9RlE_giPxCaffI/ PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://themiyapinab_user:QPGkK66bJEx0mRa2nXmufE0vCUhBVGQ9@dpg-cjreig8jbais7395i3r0-a.frankfurt-postgres.render.com/themiyapinab'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94777839446'

global.OWNER_NAME = 'Dila_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'Inbox ennepa onna group eka https://chat.whatsapp.com/B6kcvTQyBn07V9vtnYe7e2' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'Dila md'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@dila 🤹‍♂️' //sticker

global.FOOTER = 'king dila 2023 '

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Dila  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/c0921bfd6c5a3be832c38.jpg?fbclid=IwAR3WjEXnv2KSFFkZk1OXhi188fA7tXGunfS0WYwNmTNNXLWziKbHi2X8XkA' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = true

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/B6kcvTQyBn07V9vtnYe7e2' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: themiyadilan" //ur yt chanel name
global.socialm = "GitHub: themiyadilan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

