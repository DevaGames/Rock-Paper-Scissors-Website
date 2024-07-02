const chButtons = document.querySelectorAll(".option-button");
const choices = ["rock", "paper", "scissors"];
const plr_chose = document.getElementById("choice-plr");
const rbt_chose = document.getElementById("choice-rbt");
const result = document.getElementById("game-status");
let plrScore = 0;
let rbtScore = 0;

function plr_select(plrchoice) {
  let rbtChoiceIndex = Math.floor(Math.random() * 3);
  const rbtChoice = choices[rbtChoiceIndex];
  plr_chose.textContent = `You chose ${plrchoice}`;
  rbt_chose.textContent = `Computer chose ${rbtChoice}`;
  plr_chose.style.color = "blue";
  rbt_chose.style.color = "red";

  if (plrchoice === rbtChoice) {
    result.textContent = "ITS A TIE"
  }
  else {
    switch (plrchoice) {
      case "rock":
        result.textContent = (rbtChoice === "scissors") ? "YOU WIN" : "COMPUTER WINS";
      case "paper":
        result.textContent = (rbtChoice === "rock") ? "YOU WIN" : "COMPUTER WINS";
      case "scissors":
         result.textContent = (rbtChoice === "paper") ? "YOU WIN" : "COMPUTER WINS"
    }

  }
  result.style.color = (result.textContent === "YOU WIN") ? "blue" : "green";
  result.scrollIntoView({behavior: 'smooth'});
  if (result.textContent === "YOU WIN"){
    plrScore++;
    document.getElementById("score-plr").textContent = `Player score: ${plrScore}`;
  }
  else{
    rbtScore++;
    document.getElementById("score-rbt").textContent = `Computer score: ${rbtScore}`;
  }
}
chButtons.forEach(button => {
  button.addEventListener("mouseover", event => {
    chButtons.forEach(subButton => {
      subButton.style.backgroundColor = "#d4d4d4";
      subButton.style.backdropFilter = "blur(50)";
    })
    event.target.style.backgroundColor = "";
  })
  button.addEventListener("mouseout", event => {
    chButtons.forEach(subButton => {
      subButton.style.backgroundColor = "";
    })
  })
})
