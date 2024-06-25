import Player from "../components/player/player";
import "./index.css";
import renderBoard from "../components/UI/renderBoard";
import createDataPos from "../components/UI/positionData";
import inititializeBoardClicks from "../components/UI/eventListeners";

const userPlayer = new Player(true);
const botPlayer = new Player(false);

// fill out users gameboard
userPlayer.playerBoard.setShipPosition(0, 8, "horizontal", 2);
userPlayer.playerBoard.setShipPosition(4, 5, "vertical", 3);
// fill out bots gameboard
botPlayer.playerBoard.setShipPosition(0, 4, "horizontal", 2);
userPlayer.playerBoard.setShipPosition(9, 5, "vertical", 3);
// update user UI to match gameboard
const usersUI = document.querySelector("#player-content");
for (let loops = 0; loops < 100; loops++) {
  usersUI.appendChild(createDataPos(loops));
}

renderBoard(usersUI, userPlayer.playerBoard);
const userDivs = usersUI.querySelectorAll("div");
inititializeBoardClicks(userPlayer, usersUI, userDivs);

// update bots UI to match gameboard
const botsUI = document.querySelector("#bot-content");
for (let loops = 0; loops < 100; loops++) {
  botsUI.appendChild(createDataPos(loops));
}
renderBoard(botsUI, botPlayer.playerBoard);

// event listener to enemies board for clicks
const botDivs = botsUI.querySelectorAll("div");
inititializeBoardClicks(botPlayer, botsUI, botDivs);
