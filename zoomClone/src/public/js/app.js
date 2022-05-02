const socket = new WebSocket(`ws://${window.location.host}`);
//현재 내 위치, socket은 서버로의 연결을 의미
//새로고침 시 작동

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
