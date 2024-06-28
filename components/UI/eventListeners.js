import renderBoard from "./renderBoard";
import { userPlayer } from "../../src";
import { usersContent } from "../../src";
import { botPlayer } from "../../src";
export default class UserInterface {
  constructor() {}
  inititializeBoardClicks(playerObj, playerContent, divElems) {
    divElems.forEach((elem) => {
      elem.onclick = () => {
        const dataVal = elem.dataset.position;

        // get bot board, add hit to position
        playerObj.playerBoard.receiveAttack(
          Number(dataVal.charAt(0)),
          Number(dataVal.charAt(2))
        );

        // re-render bot board
        renderBoard(playerContent, playerObj.playerBoard);
        if (playerObj.playerBoard.allShipsSunk() === true) {
          // announce you won

          alert("You won!");
          this.removeClickableEvents();
        }
        // create click turns

        // this.removeClickableEvents();
        // run bot turn method
        this.botTurn();
      };
    });
  }
  removeClickableEvents() {
    const botDivs = document.querySelector("#bot-content");
    botDivs.querySelectorAll("div").forEach((elem) => {
      elem.onclick = null;
    });
  }

  botTurn() {
    // get all possible positions
    let possiblePositions = userPlayer.playerBoard.allPositions();

    // select random position from positions
    // if position is not already hit, else remove from possiblePosArr and reselect
    let selectedPos =
      possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    while (
      userPlayer.playerBoard.gameboard[selectedPos[0]][
        selectedPos[1]
      ].isHit() !== false
    ) {
      possiblePositions.splice(possiblePositions.indexOf(selectedPos), 1);
      selectedPos =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    }

    // player objects board position receives attack
    // userPlayer.playerBoard.gameboard[selectedPos[0]][selectedPos[1]].setHit();
    userPlayer.playerBoard.receiveAttack(selectedPos[0], selectedPos[1]);
    // re renderboard
    renderBoard(usersContent, userPlayer.playerBoard);
    if (userPlayer.playerBoard.allShipsSunk() === true) {
      alert("Bot wins!");
      this.removeClickableEvents();
    }
  }
}
