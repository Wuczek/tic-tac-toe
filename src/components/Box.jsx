import React from "react";

const Box = ({ board, setBoard, player, setPlayer, rowIndex, colIndex }) => {
  const handleClick = (e) => {
    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
    e.target.disabled = true;
  };
  return (
    <button
      className="w-20 h-20 border text-white text-4xl sm:size-1 md:size-2 lg:size-3"
      onClick={handleClick}
    >
      {board[rowIndex][colIndex]}
    </button>
  );
};

export default Box;
