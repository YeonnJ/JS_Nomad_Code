import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/")); //어딘가로 이동할때 홈으로 다시 보냄

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // http서버
const wss = new WebSocket.Server({ server }); //httpt서버 위에 웹소켓 서버생성

wss.on("connection", (socket) => {
  console.log("Connected to Browser ✅");
  socket.on("close", () => console.log("Disconnected from the Browser ❌"));
  socket.on("message", (message) => {
    console.log(message);
  });
  socket.send("hello!!!");
});

server.listen(3000, handleListen);
