const body = document.querySelector("body");
const header = document.createElement("header");
const title = document.createElement("h1");
const divText = document.createElement("div");
const divImg = document.createElement("div");
title.innerText = "Objeto Moeda - sprint 6";
divText.classList.add("divText");
divImg.classList.add("divImg");
body.appendChild(header);
body.appendChild(divText);
body.appendChild(divImg);
header.appendChild(title);

const coin = {
  state: 0,

  flip: function () {
    this.state = Math.floor(Math.random() * 2);
  },

  toString: function () {
    const text = document.createElement("div");
    text.classList.add("text");
    this.flip();
    if (this.state === 0) {
      text.innerText = "Heads";
    }
    if (this.state === 1) {
      text.innerText = "Tails";
    }
    return divText.appendChild(text);
  },

  toHTML: function () {
    const image = document.createElement("img");
    image.classList.add("images");
    if (coin.state === 0) {
      image.src = "/src/img/bitcoin.svg";
      image.alt = "Heads";
    }
    if (coin.state === 1) {
      image.src = "/src/img/dolar.svg";
      image.alt = "Tails";
    }
    return divImg.append(image);
  },
};

function display20Flips() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    coin.toString();
  }
}
display20Flips();

function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    coin.toHTML();
  }
}
display20Images();
