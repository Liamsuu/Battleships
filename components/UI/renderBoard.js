import { botPlayer } from "../../src";
export default function renderBoard(contentBox, gameboardObj) {
  const shipPos = gameboardObj.getShipPositions();
  const hitPos = gameboardObj.getHitPositions();

  // when restart is clicked all boxes should be blank
  const contentGrids = contentBox.querySelectorAll("div");
  contentGrids.forEach((box) => {
    box.style.backgroundColor = "#d1d5db";
    box.textContent = ""; // if theres text remove it
  });

  if (botPlayer.playerBoard === gameboardObj) {
    shipPos.forEach((posArr) => {
      // inside each array, turn them into string e.g: '0,1'
      // query select contentBox for the element with data-position of whatever the string position is now color blue
      const currentPosDiv = contentBox.querySelector(
        `[data-position='${posArr.toString()}']`
      );
      // only hit positions with a ship will show blue so player cant cheat
      if (botPlayer.playerBoard.gameboard[posArr[0]][posArr[1]].isHit()) {
        currentPosDiv.style.backgroundColor = "#71717a";
      }
    });
  } else {
    // iterate through shipPos
    shipPos.forEach((posArr) => {
      // inside each array, turn them into string e.g: '0,1'
      // query select contentBox for the element with data-position of whatever the string position is now color blue
      const currentPosDiv = contentBox.querySelector(
        `[data-position='${posArr.toString()}']`
      );

      currentPosDiv.style.backgroundColor = "#71717a";
    });
  }

  hitPos.forEach((posArr) => {
    // inside each array, turn them into string e.g: '0,1'
    // query select contentBox for the element with data-position of whatever the string position is now color blue
    const currentPosDiv = contentBox.querySelector(
      `[data-position='${posArr.toString()}']`
    );
    currentPosDiv.textContent = "X";
  });
}
