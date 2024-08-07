import Player from "../components/player/player";
import "./index.css";
import renderBoard from "../components/UI/renderBoard";
import createDataPos from "../components/UI/positionData";
import UserInterface from "../components/UI/eventListeners";
import resetGame from "../components/UI/reset";
const resetBtn = document.querySelector("#restart-btn");

export const userPlayer = new Player(true);
export const botPlayer = new Player(false);

// fill out users gameboard
userPlayer.playerBoard.randomiseBoard();

// fill out bots gameboard
botPlayer.playerBoard.randomiseBoard();

// update user UI to match gameboard
export const usersContent = document.querySelector("#player-content");
for (let loops = 0; loops < 100; loops++) {
  usersContent.appendChild(createDataPos(loops));
}

renderBoard(usersContent, userPlayer.playerBoard);

// update bots UI to match gameboard
export const botsContent = document.querySelector("#bot-content");
for (let loops = 0; loops < 100; loops++) {
  botsContent.appendChild(createDataPos(loops));
}
renderBoard(botsContent, botPlayer.playerBoard);

// event listener to enemies board for clicks
export const botDivs = botsContent.querySelectorAll("div");
export const botUI = new UserInterface();
botUI.inititializeBoardClicks(botPlayer, botsContent, botDivs);

resetBtn.addEventListener("click", () => {
  resetGame(userPlayer, usersContent, botPlayer, botsContent);
});
