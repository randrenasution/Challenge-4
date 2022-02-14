//menentukan pilihan player
const batu = document.querySelector(".player #batu");
const kertas = document.querySelector(".player #kertas");
const gunting = document.querySelector(".player #gunting");
const hands = document.querySelectorAll(".player .hand");

batu.addEventListener("click", () => {
  batu.classList.add("highlight");
});

kertas.addEventListener("click", () => {
  kertas.classList.add("highlight");
});

gunting.addEventListener("click", () => {
  gunting.classList.add("highlight");
});

const removeAll = () => {
  hands.forEach((element) => {
    element.classList.remove("highlight");
  });
};

//pilihan komputer
const random = Math.floor(Math.random() * 3);
console.log("random: ", random);

// // if (random === 0) {
// //   document.getElementById("com-batu").style.backgroundColor = "#C4C4C4";
// // } else if (random === 1) {
// //   document.getElementById("com-kertas").style.backgroundColor = "#C4C4C4";
// // } else if (random === 2) {
// //   document.getElementById("com-gunting").style.backgroundColor = "#C4C4C4";
// // }

let element = null;

if (random === 0) {
  element = document.getElementById("com-batu");
} else if (random === 1) {
  element = document.getElementById("com-kertas");
} else if (random === 2) {
  element = document.getElementById("com-gunting");
}

element.classList.add("highlight");

document.getElementById("gunting").classList.remove("highlight");

//rules
const kotak = document.createElement("div");

kotak.style.height = "100px";
kotak.style.width = "300px";
kotak.style.backgroundColor = "green";
kotak.textContent = "PLAYER WIN";
kotak.style.color = "white";
kotak.style.fontSize = "40px";
kotak.style.textAlign = "center";
kotak.style.transform = "rotate(-20deg)";

// document.getElementById("game-result").append(kotak);
// document.querySelector("#game-result .vs-text").remove();

// triger
document.getElementById("kertas").addEventListener("click", () => {
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").remove();

  document.querySelector("#game-result .player-result").textContent = getResult();
});

const result = "";
if (player === com) {
  result = "DRAW";
} else if (player == "batu") {
  result = com == "gunting" ? "PLAYER WIN" : "COM WIN";
} else if (player == "kertas") {
  result = com == "batu" ? "PLAYER WIN" : "COM WIN";
} else if (player == "gunting") {
  result = com == "kertas" ? "PLAYER WIN" : "COM WIN";
}

document.getElementsByClassName("hand").addEventListener("click", () => {
  const result = getResult();
});
