# 📊 MC > Discord Updater

---

## 🚀 Introduction

A Discord bot script that updates a channel or Discord activity to fit the amount of players on a MC server.
At the moment, it supports channel name updating, channel description updating and bot presence updating.

---

## 🚧 Warning

Discord's API limits on channel renaming and topic updating may be high at the moment (nobody seems to know which they exactly are, but
around 2 renames per 10 minutes seems to be a safe guess). At such, don't try setting timeouts to values that are too low or it may
not work at all.

---

## ⚙ Configuration

All the configuration is done through the `config.json` file.

* `token` - The bot's token on Discord.
* `server` - The server's data.
  * `ip` - The server's IP.
  * `port` - The server's port.
* `motd_pfp` - Whether the bot will try to fetch and update its profile picture according to the server's icon.
* `defPresence` - The bot's presence data by default.
  * `status` - The bot's status. This is the only option that will remain constant whether presence updating is enabled or not. [Possible values.](https://discord.js.org/#/docs/main/stable/typedef/PresenceStatus).
  * `activity` - The bot's activity (This is only used if presence updating is disabled)
    * `type` - The bot's activity type. [Possible values.](https://discord.js.org/#/docs/main/stable/typedef/ActivityType)
    * `name` - The string to use as the bot's current activity.
* `updates` - Options for the bot to update.
  * `presence` - Options for presence updating.
    * `enabled` - Whether presence updating is enabled or not.
    * `type` - The bot's activity type. [Possible values.](https://discord.js.org/#/docs/main/stable/typedef/ActivityType)
    * `format` - The string to use when updating. `%p%` is used as a placeholder and will be replaced with the playercount.
    * `offline` - The string to use if the server is offline.
    * `timeout` - The timeout (in seconds) between each update.
  * `channel_name` - Options for channel name updating.
    * `enabled` - Whether channel name updating is enabled or not.
    * `channel_id` - The ID (not name) of the channel to update.
    * `format` - The string to use when updating. `%p%` is used as a placeholder and will be replaced with the playercount.
    * `offline` - The string to use if the server is offline.
    * `timeout` - The timeout (in seconds) between each update.
  * `channel_description` - Options for channel description updating.
    * `enabled` - Whether channel name description is enabled or not.
    * `channel_id` - The ID (not name) of the channel to update.
    * `format` - The string to use when updating. `%p%` is used as a placeholder and will be replaced with the playercount.
    * `offline` - The string to use if the server is offline.
    * `timeout` - The timeout (in seconds) between each update.

---

## 🏃‍♂️ Setting the Bot up

This bot uses Discord.js v13, so **Node.js 16.6.0 or newer** is required.

1. Change `exampleconfig.json` according to your needs.
2. Rename `exampleconfig.json` to `config.json`.
3. On a command prompt opened on the bot's working folder, use `npm i` to install the dependencies.
4. On the same command prompt use `node .`
5. Enjoy!

---

## 💻 Development

The bot uses the [minecraft-server-ping](https://www.npmjs.com/package/minecraft-server-ping) to get server data directly from the server by pinging it. If you think you have a better implementation, feel free to leave a PR.

---
