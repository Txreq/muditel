const { createHmac } = require("crypto");

const secret = String(Math.floor(Math.random() * 10 ** 5));
const key = createHmac("sha256", secret)
    .update("apikey")
    .digest("hex")
    .toUpperCase();

const protected = (req, res, next) => {
    if (req.headers.api_key == key) {
        next();
    } else {
        res.send(404);
    }
};

module.exports = { protected, key };
