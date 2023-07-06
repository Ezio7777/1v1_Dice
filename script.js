const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const title = document.querySelector("#title");

let p1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
let p2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

setImages(p1, p2);
changeTitle(p1, p2);

function setImages(p1, p2) {
  dice1.setAttribute("src", `images/dice${p1}.png`);
  dice2.setAttribute("src", `images/dice${p2}.png`);
}

function changeTitle(p1, p2) {
  if (p1 > p2) {
    title.innerHTML = "Player 1 is Winner";
  } else if (p1 === p2) {
    title.innerHTML = "Draw";
  } else {
    title.innerHTML = "Player 2 is Winner";
  }
}
