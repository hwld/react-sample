import React from 'react';
import Square from 'components/Square';
import styled from 'styled-components';

interface BoardProp {
  squares: (string | null)[];
  winFactors: (number | null)[];
  onClick: (i: number) => void;
}

const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`;

const Board: React.FC<BoardProp> = ({ squares, winFactors, onClick }) => {
  const renderSquare = (i: number) => (
    <Square
      value={squares[i]}
      onClick={() => onClick(i)}
      key={i}
      isWinFactor={winFactors.includes(i)}
    />
  );

  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <BoardRow key={Math.random()}>
          {[...Array(3)].map((__, j) => renderSquare(3 * i + j))}
        </BoardRow>
      ))}
    </div>
  );
};

export default Board;
