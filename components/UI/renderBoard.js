export default function renderBoard(contentBox, gameboardObj) {
  const shipPos = gameboardObj.getShipPositions();
  const hitPos = gameboardObj.getHitPositions();

  // iterate through shipPos
  shipPos.forEach((posArr) => {
    // inside each array, turn them into string e.g: '0,1'
    // query select contentBox for the element with data-position of whatever the string position is now color blue
    const currentPosDiv = contentBox.querySelector(
      `[data-position='${posArr.toString()}']`
    );

    currentPosDiv.style.backgroundColor = "blue";
  });

  hitPos.forEach((posArr) => {
    // inside each array, turn them into string e.g: '0,1'
    // query select contentBox for the element with data-position of whatever the string position is now color blue
    const currentPosDiv = contentBox.querySelector(
      `[data-position='${posArr.toString()}']`
    );
    currentPosDiv.textContent = "X";
  });
}
