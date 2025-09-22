# 📱 WhatsApp Daily Survey Bot

A simple WhatsApp bot built with **[whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)**.  
It sends scheduled daily survey messages to one or multiple numbers.  

Message **title** and **body** are configurable via `.env`.  
If you include `{{date}}`, it will be replaced with **the previous day's date**.

---

## 🚀 Features
- Login via WhatsApp Web QR code (no need to scan again each time).
- Supports multiple target numbers.
- Customizable schedule with cron expressions.
- Configurable title and body from `.env`.
- `{{date}}` placeholder replaced with previous day’s date.

---

## 📦 Packages Used
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) → WhatsApp automation
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) → Display QR code in terminal
- [node-cron](https://www.npmjs.com/package/node-cron) → Scheduling messages
- [dotenv](https://www.npmjs.com/package/dotenv) → Load configuration from `.env`

---

## 🔧 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/whatsapp-bot.git
   cd whatsapp-bot
