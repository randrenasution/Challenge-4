//Pilihan Player
const batu = document.querySelectorAll(".player #batu");
const kertas = document.querySelectorAll(".player #kertas");
const gunting = document.querySelectorAll(".player #gunting");

batu.addEventListener("click", () => {
  batu.style.padding = "22px 45px";
  batu.style.backgroundColor = "#C4C4C4#";
  batu.style.borderRadius = "20px";
});

kertas.addEventListener("click", () => {
  kertas.style.padding = "22px 45px";
  kertas.style.backgroundColor = "#C4C4C4#";
  kertas.style.borderRadius = "20px";
});

gunting.addEventListener("click", () => {
  gunting.style.padding = "22px 45px";
  gunting.style.backgroundColor = "#C4C4C4#";
  gunting.style.borderRadius = "20px";
});

//Pilihan computer
// function pilCom() {
//   const cominput = Math.floor(Math.random() * 3) + 1;
//   console.log(cominput);
// if (cominput === 1) return "batu";
// document.getElementById("com-batu");
// if (cominput === 2) return "kertas";
// document.getElementById("com-kertas");
// if (cominput === 3) return "gunting";
// document.getElementById("com-gunting");

//   if (cominput === 1) {
//     comPlay = "batu";
//   }
//   if (cominput === 2) {
//     comPlay = "kertas";
//   }
//   if (cominput === 3) {
//     comPlay = "gunting";
//   }
// }
