import React, { useState } from 'react';
import Board from 'components/Board';
import GameStatus from 'components/GameStatus';
import { calculateWinner } from 'util/calculateWinner';
import HistoryList, { HistoryItem } from './HistoryList';

interface StateType {
  history: HistoryItem[];
  nextHistoryId: number;
  stepNumber: number;
  xIsNext: boolean;
}

const Game: React.FC = () => {
  const [state, setState] = useState<StateType>({
    history: [
      {
        squares: Array(9).fill(null),
        hand: { col: 0, row: 0 },
        id: 0,
      },
    ],
    nextHistoryId: 1,
    stepNumber: 0,
    xIsNext: true,
  });

  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];

  const jumpTo = (step: number) => {
    setState(prevState => ({
      ...prevState,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    }));
  };

  const handleClick = (i: number) => {
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? 'X' : 'O';
    const col = (i % 3) + 1;
    const row = Math.floor(i / 3) + 1;

    setState(prevState => ({
      ...prevState,
      history: history.concat([
        {
          squares,
          hand: { col, row },
          id: prevState.nextHistoryId,
        },
      ]),
      nextHistoryId: prevState.nextHistoryId + 1,
      stepNumber: history.length,
      xIsNext: !prevState.xIsNext,
    }));
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <GameStatus
          winner={calculateWinner(current.squares)}
          nextPlayer={state.xIsNext ? 'X' : 'O'}
        />
        <HistoryList history={state.history} onClick={i => jumpTo(i)} />
      </div>
    </div>
  );
};

export default Game;
