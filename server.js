const express = require("express")
const expressWs = require("express-ws")
const http = require("http")

let port = 6942;
let app = express();
let server = http.createServer(app).listen(port);    
let players = []

expressWs(app, server);

app.ws('/', async function(ws, req) {
    console.log("Joined")
    players.push(ws)
    console.log(players)
    ws.on('message', async function(msg) {
        players.forEach((player) => {
            player.send(msg)
        })
    });
    ws.on("close", function(err) {
        players.splice(players.indexOf(ws), 1);
        console.log(players)
        console.log("Disconnected")
    })
});
