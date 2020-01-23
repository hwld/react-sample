import React from 'react';
import Board from 'components/Board';
import GameStatus from 'components/GameStatus';
import HistoryList from 'components/HistoryList';

import { junpTo, addNextMove } from 'stores/game';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import styled from 'styled-components';

const GameRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const { history, stepNumber, xIsNext, gameStatus } = useSelector(
    (state: RootState) => state.game,
  );

  return (
    <GameRoot>
      <div>
        <Board
          squares={history[stepNumber].squares}
          winFactors={gameStatus.winFactors}
          onClick={i => dispatch(addNextMove(i))}
        />
      </div>
      <GameInfo>
        <GameStatus status={gameStatus} nextPlayer={xIsNext ? 'X' : 'O'} />
        <HistoryList
          history={history}
          stepNum={stepNumber}
          jumpTo={i => dispatch(junpTo(i))}
        />
      </GameInfo>
    </GameRoot>
  );
};

export default Game;
