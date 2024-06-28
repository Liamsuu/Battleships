import renderBoard from "./renderBoard";
import Node from "../node/node";
import { botDivs } from "../../src";
import { botUI } from "../../src";

export default function resetGame(
  userPlayer,
  userContentBox,
  botPlayer,
  botContentBox
) {
  // get user gameboard and reset to blank
  userPlayer.playerBoard.resetBoard();
  // get bots gameboard and reset to blank
  botPlayer.playerBoard.resetBoard();

  // set random values on users playerboard
  userPlayer.playerBoard.randomiseBoard();
  // set random values on bots playerboard
  botPlayer.playerBoard.randomiseBoard();

  renderBoard(userContentBox, userPlayer.playerBoard);
  renderBoard(botContentBox, botPlayer.playerBoard);
  botUI.inititializeBoardClicks(botPlayer, botContentBox, botDivs);
}
