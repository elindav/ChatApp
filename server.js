const express = require('express');
const http = require('http')
const path = require('path')
const socket = require("socket.io")

const app = express();
const server = http.createServer(app)

const io = socket(server);

const PORT = 3000

app.use(express.static(path.join(__dirname, "public")))
io.on("connection", (socket)=> {
  console.log("a user connected");
  socket.emit ("message", "Hello and welcome!")
  socket.on("disconnect", ()=> {
    io.emit("message", "a user has just left!");
  });
});

 server.listen(PORT, ()=> {
   console.log(`server is running on port ${PORT}`);
 });