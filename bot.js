const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { Client, Intents} = require('discord.js');

const config = require('./config.json');

class Bot {
    constructor() {
        this.#client = new Client({ intents: [Intents.FLAGS.GUILDS] })
    }

    #client;

    static instance = new Bot();

    static getInstance() {
        return this.instance;
    }

    async renameServer(client) {
        const { channel_id, server, format, offline } = config;
        const channel = await client.channels.fetch(channel_id);

        const response = await (await fetch(`https://api.minetools.eu/ping/${server.ip}/${server.port}`)).json();
        if (response.error) return channel.setName(offline);

        const playersResponse = response.players;
        await channel.setName(format.replace('%p%', playersResponse.online));
    }

    async start() {
        await this.#client.login(config.token);
        console.log(`Started. Listening to ${config.server.ip}:${config.server.portde}`)
        await this.renameServer(this.#client);
        setInterval(this.renameServer, config.timeout, this.#client);
    }
}

module.exports = Bot;