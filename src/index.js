import Player from "../components/player/player";
import "./index.css";
import renderBoard from "../components/UI/renderBoard";
import createDataPos from "../components/UI/positionData";
import inititializeBoardClicks from "../components/UI/eventListeners";
import UserInterface from "../components/UI/eventListeners";
import resetGame from "../components/UI/reset";
const resetBtn = document.querySelector("#restart-btn");
const randomiseBtn = document.querySelector("#random-btn");

const userPlayer = new Player(true);
const botPlayer = new Player(false);

// fill out users gameboard
userPlayer.playerBoard.setShipPosition(0, 8, "horizontal", 2);
userPlayer.playerBoard.setShipPosition(4, 5, "vertical", 3);
// fill out bots gameboard
botPlayer.playerBoard.setShipPosition(0, 4, "horizontal", 2);
userPlayer.playerBoard.setShipPosition(9, 5, "vertical", 3);
// update user UI to match gameboard
const usersContent = document.querySelector("#player-content");
for (let loops = 0; loops < 100; loops++) {
  usersContent.appendChild(createDataPos(loops));
}

renderBoard(usersContent, userPlayer.playerBoard);
const userDivs = usersContent.querySelectorAll("div");
const userUI = new UserInterface();
userUI.inititializeBoardClicks(userPlayer, usersContent, userDivs);

// update bots UI to match gameboard
const botsContent = document.querySelector("#bot-content");
for (let loops = 0; loops < 100; loops++) {
  botsContent.appendChild(createDataPos(loops));
}
renderBoard(botsContent, botPlayer.playerBoard);

// event listener to enemies board for clicks
const botDivs = botsContent.querySelectorAll("div");
const botUI = new UserInterface();
botUI.inititializeBoardClicks(botPlayer, botsContent, botDivs);

resetBtn.addEventListener(
  "click",
  resetGame(userPlayer, usersContent, botPlayer, botsContent)
);
