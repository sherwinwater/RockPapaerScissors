var move_you_photo = document.getElementById("move_you");
var move_computer_photo = document.getElementById("move_computer");
var yourScore_span = document.getElementById("yourscore");
var computerScore_span = document.getElementById("computerscore");
var result = document.getElementById("result");
var finish = document.getElementById("finish");
var newgame = document.getElementById("newGame");
var game_photo = '<img src="images/game.png" alt="" width="70">';

var messageResult = document.getElementById("messageResult");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var rock_pic = '<img src="images/rock.png" alt="" width="100">';
var paper_pic = '<img src="images/paper.png" alt="" width="100">';
var scissors_pic = '<img src="images/scissors.png" alt="" width="100">';

var move_you, move_computer;
var yourScore = 0,
  computerScore = 0;

rock.addEventListener("click", rockMove);
function rockMove() {
  move_you_photo.innerHTML = rock_pic;
  move_you_photo.classList.add("dark");
  move_you = "rock";
  computerMove();
  compareMove(move_you, move_computer);
}

paper.addEventListener("click", paperMove);
function paperMove() {
  move_you_photo.innerHTML = paper_pic;
  move_you_photo.classList.add("dark");
  move_you = "paper";
  computerMove();
  compareMove(move_you, move_computer);
}

scissors.addEventListener("click", scissorsMove);
function scissorsMove() {
  move_you_photo.innerHTML = scissors_pic;
  move_you_photo.classList.add("dark");
  move_you = "scissors";
  computerMove();
  compareMove(move_you, move_computer);
}

function computerMove() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      move_computer_photo.innerHTML = rock_pic;
      move_computer_photo.classList.add("dark");
      move_computer = "rock";
      break;
    case 1:
      move_computer_photo.innerHTML = paper_pic;
      move_computer_photo.classList.add("dark");
      move_computer = "paper";
      break;
    case 2:
      move_computer_photo.innerHTML = scissors_pic;
      move_computer_photo.classList.add("dark");
      move_computer = "scissors";
      break;
  }
}

function compareMove(move_you, move_computer) {
  switch (move_you + move_computer) {
    // tie move
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      result.innerHTML = "tie";
      break;

    // you win
    case "rockscissors":
      result.innerHTML = "Rock crushes scissors";
      yourScore++;
      yourScore_span.innerHTML = yourScore;
      break;
    case "paperrock":
      result.innerHTML = "Paper covers rock";
      yourScore++;
      yourScore_span.innerHTML = yourScore;
      break;
    case "scissorspaper":
      result.innerHTML = "Scissors cuts paper ";
      yourScore++;
      yourScore_span.innerHTML = yourScore;
      break;

    // you lose
    case "rockpaper":
      result.innerHTML = "Paper covers rock";
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      break;
    case "paperscissors":
      result.innerHTML = "Scissors cuts paper ";
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      break;
    case "scissorsrock":
      result.innerHTML = "Rock crushes scissors";
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      break;
  }
}

finish.addEventListener("click", function() {
  // stop moving
  rock.removeEventListener("click", rockMove);
  paper.removeEventListener("click", paperMove);
  scissors.removeEventListener("click", scissorsMove);

  // you win
  if (yourScore > computerScore) {
    messageResult.innerHTML =
      "You win this game! your score / computer's score : " +
      yourScore +
      "/" +
      computerScore;
  }
  //tie
  if (yourScore === computerScore)
    messageResult.innerHTML =
      "It's tie game! Both you and computer got " + yourScore;
  // you lose
  if (yourScore < computerScore)
    messageResult.innerHTML =
      "You lost this game! your score / computer's score : " +
      yourScore +
      "/" +
      computerScore;
});

newGame.addEventListener("click", function() {
  yourScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
  messageResult.innerHTML = "Who will win this game?";
  move_you_photo.innerHTML = game_photo;
  move_you_photo.classList.remove("dark");
  move_computer_photo.innerHTML = game_photo;
  move_computer_photo.classList.remove("dark");

  // start moving
  rock.addEventListener("click", rockMove);
  paper.addEventListener("click", paperMove);
  scissors.addEventListener("click", scissorsMove);
});
