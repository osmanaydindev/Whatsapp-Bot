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

---

## ⚙️ Configuration

Create a .env file in the root folder:

### - Multiple numbers separated by commas
TARGET_NUMBERS=905111111111@c.us,905222222222@c.us

### - Message body
{{date}} → will be replaced with the previous day’s date<br><br>
MESSAGE_BODY=Good morning! 🌞 Join today’s survey here: https://docs.google.com/forms/xxxxx

### - Message title
TITLE=Daily Goals Survey — {{date}}

### - Cron schedule (example: every day at 09:10)
CRON_SCHEDULE=0 10 9 * * *


#### 👉 Phone numbers must be in the format:
countrycode + number + @c.us
Example: 905123456789@c.us

---

## ▶️ Usage

Start the bot:

node index.js


On first run, a QR code will be displayed in the terminal.
Scan it with WhatsApp → Linked Devices.

---

## 🕒 Cron Examples
0 10 9 * * *      → Every day at 09:10<br>
0 0 8 * * 1-5     → Weekdays at 08:00<br>
0 */30 9-18 * * * → Every 30 minutes between 09:00–18:59


More info: crontab.guru

### 📌 Notes

{{date}} will be replaced with yesterday’s date.

Authentication is stored in .wwebjs_auth, so you don’t need to scan the QR code every time.

### 📷 Example Output
*Daily Goals Survey — 2025-09-21*

Good morning! 🌞
Join today’s survey here: https://docs.google.com/forms/xxxxx
<br>
<br>
<br>
<br>
