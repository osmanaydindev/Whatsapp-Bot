require('dotenv').config();

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');

// === CONFIG ===
const targetNumbers = process.env.TARGET_NUMBERS.split(",").map(n => n.trim());
const messageBody   = process.env.MESSAGE_BODY;
const titleTemplate = process.env.TITLE;
const cronSchedule  = process.env.CRON_SCHEDULE || "0 10 9 * * *"; // default 09:10

// === WHATSAPP CLIENT ===
const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', qr => {
    console.log('QR Kodu tarat:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp bot hazır ✅');

    cron.schedule(cronSchedule, () => {
        const today = new Date();
        today.setDate(today.getDate() - 1); // 1 gün geri
        const yesterday = today.toISOString().split("T")[0];

        const title = titleTemplate.replace("{{date}}", yesterday);
        const text  = messageBody.replace("{{date}}", yesterday);

        targetNumbers.forEach(number => {
            client.sendMessage(number, `*${title}*\n\n${text}`);
            console.log(`Mesaj gönderildi: ${number} — ${title}`);
        });
    }, {
        timezone: "Europe/Istanbul"
    });
});

client.initialize();
