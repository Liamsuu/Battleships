import renderBoard from "./renderBoard";
export default function inititializeBoardClicks(playerObj, playerUI, divElems) {
  divElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      const dataVal = elem.dataset.position;

      // get bot board, add hit to position
      playerObj.playerBoard.receiveAttack(
        Number(dataVal.charAt(0)),
        Number(dataVal.charAt(2))
      );

      // re-render bot board
      renderBoard(playerUI, playerObj.playerBoard);
      if (playerObj.playerBoard.allShipsSunk() === true) {
        // later change this to either play or bot winner by checking playerObj if real player === true
        if (playerObj.realPlayer === false) {
          alert("You won!");
        } else {
          alert("The bot won!");
        }
      }
    });
  });
}
