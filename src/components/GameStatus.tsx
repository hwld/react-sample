import React from 'react';
import { GameStatusItem } from 'stores/game';
import { Typography } from '@material-ui/core';

interface GameStatusProps {
  status: GameStatusItem;
  nextPlayer: string;
}

const GameStatus: React.FC<GameStatusProps> = ({ status, nextPlayer }) => {
  let message;

  if (!status.isFinish) {
    message = `NextPlayer: ${nextPlayer}`;
  } else if (status.winner) {
    message = `Winner: ${status.winner}`;
  } else if (!status.winner) {
    message = 'Draw';
  }

  return <Typography>{message}</Typography>;
};

export default GameStatus;
