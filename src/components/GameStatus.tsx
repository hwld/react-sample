import React from 'react';

interface GameStatusProps {
  winner: string | null;
  nextPlayer: string;
}

const GameStatus: React.FC<GameStatusProps> = ({ winner, nextPlayer }) => {
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `NextPlayer: ${nextPlayer}`;
  }

  return <div>{status}</div>;
};

export default GameStatus;
