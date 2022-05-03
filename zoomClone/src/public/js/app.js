const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName = true;

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");

  socket.emit("enter_room", { payload: input.value }, showRoom);
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
