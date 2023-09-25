import { useState, useEffect } from "react";
import Box from "./Box";

const Board = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState(null);

  const announceWinnerAndReset = (play) => {
    setWinner(play);
    setTimeout(() => {
      setBoard([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      setPlayer("O");
      setWinner(null);
      const boxes = document.querySelectorAll("button");
      boxes.forEach((box) => (box.disabled = false));
    }, 2000);
  };

  useEffect(() => {
    const checkWinner = () => {
      for (let i = 0; i < 3; i++) {
        if (
          board[i][0] === board[i][1] &&
          board[i][1] === board[i][2] &&
          board[i][0] !== ""
        ) {
          announceWinnerAndReset(board[i][0]);
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i] &&
          board[0][i] !== ""
        ) {
          announceWinnerAndReset(board[0][i]);
        }
      }

      if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== ""
      ) {
        announceWinnerAndReset(board[0][0]);
      }

      if (
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] !== ""
      ) {
        announceWinnerAndReset(board[0][2]);
      }
    };
    checkWinner();
  }, [board]);

  return (
    <>
      {winner && (
        <p className="text-center text-lg text-white">{`The winner is ${winner}`}</p>
      )}
      <div className="grid grid-cols-3 border relative">
        {board.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            let boxIndex = `${rowIndex}${colIndex}`;
            return (
              <Box
                key={boxIndex}
                player={player}
                board={board}
                setBoard={setBoard}
                setPlayer={setPlayer}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            );
          });
        })}
      </div>
    </>
  );
};

export default Board;
