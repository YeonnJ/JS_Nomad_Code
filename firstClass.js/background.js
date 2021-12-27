const img = ["0.jpeg", "1.jpeg", "2.png"];

const choseImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${choseImg}`;

document.body.appendChild(bgImg);
