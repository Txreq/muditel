const NODE_ENV = process.env.NODE_ENV;
const CONFIG = {
    dev: {
        httpPort: 3000,
    },
    prod: {
        httpPort: 5000,
    },
};

let env = typeof NODE_ENV == "undefined" ? "dev" : NODE_ENV;

module.exports = CONFIG[env];