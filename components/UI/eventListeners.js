import renderBoard from "./renderBoard";
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
          // announce winner
          if (playerObj.realPlayer === false) {
            alert("You won!");
            this.removeClickableEvents();
          } else {
            alert("The bot won!");
            this.removeClickableEvents();
          }
        }
      };
    });
  }
  removeClickableEvents() {
    const playerDivs = document.querySelector("#player-content");
    playerDivs.querySelectorAll("div").forEach((elem) => {
      elem.onclick = null;
    });
    const botDivs = document.querySelector("#bot-content");
    botDivs.querySelectorAll("div").forEach((elem) => {
      elem.onclick = null;
    });
  }
}
