const Bot = require('./bot');

Bot.getInstance().start().catch((error) => {
    console.error(error);
})