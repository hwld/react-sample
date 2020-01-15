import React from 'react';
import Square from 'components/Square';

interface BoardProp {
  squares: string[] | null[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProp> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <div className="board-row" key={Math.random()}>
          {[...Array(3)].map((__, j) => renderSquare(3 * i + j))}
        </div>
      ))}
    </div>
  );
};

export default Board;
