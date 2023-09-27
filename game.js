let moves = ["rock", "paper", "scissor"];
let player1_score = [];
let player2_score = [];
let player1_image = document.getElementById("player1_image");
let player2_image = document.getElementById("player2_image");
let play = document.getElementById("play");
let reset = document.getElementById("reset");
let loading = document.getElementById("loading");
setTimeout(() => {
  loading.src = "";
}, 3000);
play.addEventListener("click", abc);
function abc() {
  var player1 = Math.floor(Math.random() * 3);
  var player2 = Math.floor(Math.random() * 3);
  // document.getElementById("player1_move").innerText = moves[player1];
  // document.getElementById("player2_move").innerText = moves[player2];
  player1_image.src = "images/" + player1 + ".png";
  player2_image.src = "images/" + player2 + ".png";

  if (player1 == 0 && player2 == 1) {
    player2_score.push("win");
    document.getElementById("player2_points").innerHTML = player2_score.length;
  } else if (player1 == 0 && player2 == 2) {
    player1_score.push("win");
    document.getElementById("player1_points").innerText = player1_score.length;
  } else if (player1 == 1 && player2 == 0) {
    player1_score.push("win");
    document.getElementById("player1_points").innerText = player1_score.length;
  } else if (player1 == 1 && player2 == 2) {
    player2_score.push("win");
    document.getElementById("player2_points").innerText = player2_score.length;
  } else if (player1 == 2 && player2 == 0) {
    player2_score.push("win");
    document.getElementById("player2_points").innerText = player2_score.length;
  } else if (player1 == 2 && player2 == 1) {
    player1_score.push("win");
    document.getElementById("player1_points").innerText = player1_score.length;
  } else if (player1 == player2) {
    document.getElementById("winner").innerHTML = "<h2>Draw</h2>";
    setTimeout(() => {
      document.getElementById("winner").innerText = "";
    }, 2000);
  }
  if (player1_score.length == 3) {
    document.getElementById("winner").innerHTML =
      "<h1>Player 1 is winner to play again please reset</h1>";
    play.removeEventListener("click", abc);
  } else if (player2_score.length == 3) {
    document.getElementById("winner").innerHTML =
      "<h1>Player 2 is winner to play again please reset</h1>";
    play.removeEventListener("click", abc);
  }
}

reset.addEventListener("click", function () {
  player1_score = [];
  player2_score = [];
  document.getElementById("player2_points").innerText = player2_score.length;

  document.getElementById("player1_points").innerText = player1_score.length;
  document.getElementById("player1_move").innerText = "";
  document.getElementById("player2_move").innerText = "";
  document.getElementById("winner").innerHTML = "";
  play.addEventListener("click", abc);
  window.location.reload();
});
