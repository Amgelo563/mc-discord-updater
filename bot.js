const { Client, Intents } = require('discord.js');
const { ping } = require('minecraft-server-ping');

const config = require('./config.json');

class Bot {
    constructor() {
        this.#client = new Client({
            intents: [Intents.FLAGS.GUILDS],
            presence: {
                status: config.defPresence.status,
                activities: [config.defPresence.activity]
            }
        })
    }

    #client;

    static instance = new Bot();

    static getInstance() {
        return this.instance;
    }

    async getPlayers() {
        try {
            const serverPing = await ping(config.server.ip, config.server.port);
            return serverPing.players.online;
        } catch (e) {
            if (e.code === 'ENOTFOUND') return 'offline';
            console.error(e);
        }
    }

    async updatePresence(client, getPlayers) {
        const count = await getPlayers();
        if (count === 'offline') return client.user.setActivity(config.updates.presence.offline);
        return client.user.setActivity(config.updates.presence.format.replace('%p%', count), {type: config.updates.presence.type});
    }

    async updateChannelName(client, getPlayers) {
        const count = await getPlayers();
        const channel = await client.channels.fetch(config.updates.channel_name.channel_id);
        return channel.setName(config.updates.channel_name.format.replace('%p%', count));
    }

    async updateChannelDesc(client, getPlayers) {
        const count = await getPlayers();
        const channel = await client.channels.fetch(config.updates.channel_description.channel_id);
        return channel.setTopic(config.updates.channel_name.format.replace('%p%', count));
    }

    async updateProfilePicture(client) {
        const serverPing = await ping(config.server.ip, config.server.port);
        return client.user.setAvatar(Buffer.from(serverPing.favicon.replace(/^data:image\/\w+;base64,/, ''), 'base64'));
    }

    async start() {
        await this.#client.login(config.token);
        console.log(`Started. Listening to ${config.server.ip}:${config.server.port}`);
        
        if (config.updates.presence.enabled) {
            await this.updatePresence(this.#client, this.getPlayers);
            setInterval(this.updatePresence, config.updates.presence.timeout * 1000, this.#client, this.getPlayers)
        };

        if (config.updates.channel_name.enabled) {
            await this.updateChannelName(this.#client, this.getPlayers);
            setInterval(this.updateChannelName, config.updates.channel_name.timeout * 1000, this.#client, this.getPlayers)
        };

        if (config.updates.channel_description.enabled) {
            const channel = await this.#client.channels.fetch(config.updates.channel_description.channel_id);
            if (!channel.isText()) return console.warn(`| The specified channel in channel_description does not have a topic feature.
| As such, we will not try to update its description. Please change it to another channel or disable this on the config.`);
            await this.updateChannelDesc(this.#client, this.getPlayers);
            setInterval(this.updateChannelDesc, config.updates.channel_description.timeout * 1000, this.#client, this.getPlayers)
        };

        if (config.motd_pfp) {
            await this.updateProfilePicture(this.#client);
            setInterval(this.updateProfilePicture, 21600000, this.#client) // 6 hours, feel free to change this according to your needs
        }
    }
}

module.exports = Bot;
