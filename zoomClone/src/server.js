import express from "express";
import http from "http";
import SocketIO from "socket.io";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
//어딘가로 이동할때 홈으로 다시 보냄

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
  console.log(socket);
  socket.on("enter_room", (roomName, showRoom) => {
    socket.join(roomName); //방에 참가
    showRoom(); //방에 입장
  });
});

httpServer.listen(3000, handleListen);
