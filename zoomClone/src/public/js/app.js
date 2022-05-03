const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`; //방 이름보여주기
  const form = room.querySelector("form");
  form.addEventListener("submit", handleMessageSubmit);
}

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");

  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("input");
  const value = input.value;
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");

  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
  //이벤트이름은 원하는대로 모두 가능
  //socket.emit 과 socket.on에는 반드시 같은이름을 사용할 것

  // socket.emit(
  //   "enter_room",
  //   { payload: input.value },
  //   5,
  //   true,
  //   false,
  //   "hi",
  //   onChangeValue
  //   );
  // => 원하는 모든 데이터 전달이가능(함수는 반드시 마지막인자로)
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", () => {
  addMessage("someone joined!");
});

socket.on("bye", () => {
  addMessage("someone left");
});

socket.on("new_message", addMessage);
