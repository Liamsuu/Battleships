import Player from "../components/player/player";
import "./index.css";

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

// update bots UI to match gameboard
const botsUI = document.querySelector("#bot-content");
