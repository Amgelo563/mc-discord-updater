# 📊 MC > Discord Updater
---
## 🚀 Introduction
A simple Discord bot script that updates a channel's name to fit the amount of players on a MC server.
This is not really meant to be used as a full bot, but rather an utility so others can be guided on how a bot that does this could be done, but still, it's still usable as a full bot if you only want it for a small server.

---

## ⚙ Configuration
All the configuration is done through the `config.json` file.
* `token` - The bot's token on Discord.
* `channel_id` - The ID (not name) of the channel to modify.
* `format` - The format to use to name the channel. `%p%` is used as a placeholder to replace the amount of players.
* `offline` - The string to use in case the server is offline.
* `server` - The server's data.
  * `ip` - The server's IP.
  * `port` - The server's port.
* `timeout` - The timeout, **in milliseconds**, to update the channel's name.

---

## 💻 Development

The bot uses the [Minetools API](https://api.minetools.eu/) to get server data, but it could technically be adapted to any kind of online API or direct connection to the server. If you have a better example, feel free to let me know or leave a PR.

As for the actual code, it's [located here](https://github.com/Amgelo563/mc-discord-updater/blob/main/bot.js#L21-L27), the rest is mostly Discord connection stuff. This repository is licensed with MIT so as a TL;DR, feel free to do whatever you'd like with this.

---
