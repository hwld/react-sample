import React from 'react';
import Board from 'components/Board';
import GameStatus from 'components/GameStatus';
import HistoryList from 'components/HistoryList';

import { junpTo, addNextMove } from 'stores/game';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const { history, stepNumber, xIsNext, gameStatus } = useSelector(
    (state: RootState) => state.game,
  );

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history[stepNumber].squares}
          winFactors={gameStatus.winFactors}
          onClick={i => dispatch(addNextMove(i))}
        />
      </div>
      <div className="game-info">
        <GameStatus status={gameStatus} nextPlayer={xIsNext ? 'X' : 'O'} />
        <HistoryList
          history={history}
          stepNum={stepNumber}
          jumpTo={i => dispatch(junpTo(i))}
        />
      </div>
    </div>
  );
};

export default Game;
