const http = require("http");
const express = require("express");
const dotenv = require("dotenv").config();
const ratelimiter = require("express-rate-limit");

const port = require("./config.js");
const { sendEmail } = require("./functions/sendEmail.js");
const { protected, key } = require("./functions/apiKey.js");

const app = express();
const server = http.createServer(app);
const limiter = ratelimiter({
    windowMs: 10 ** 3,
    max: 1,
    standardHeaders: true,
    legacyHeaders: false,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.get("/", protected, (req, res) => {
    res.send(200);
});
app.post("/send", protected, (req, res) => {
    sendEmail(req, res, {
        sender: {
            name: req.body.name,
            email: req.body.email,
        },
        subject: "New message from " + req.body.name,
        content: req.body.content,
    })
        .then((inf) => res.send(200))
        .catch((err) => {
            console.log(err.message);
            res.send(404);
        });
});

server.listen(port.httpPort, () => {
    console.clear();
    console.log("server is running on port : " + port.httpPort);
    console.log(key);
});
