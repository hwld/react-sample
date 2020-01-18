import React, { useState } from 'react';
import { HistoryItem } from 'stores/game';

interface HistoryListProps {
  history: HistoryItem[];
  stepNum: number;
  jumpTo: (move: number) => void;
}

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  stepNum,
  jumpTo,
}) => {
  const [isAsc, setIsAsc] = useState(true);
  const radioName = Math.random().toString();
  const ascId = Math.random().toString();
  const descId = Math.random().toString();

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #{col: ${step.hand.col} , row: ${step.hand.row}}`
      : 'Go to game start';

    return (
      <li key={step.id}>
        <button
          className={stepNum === move ? 'selected' : ''}
          type="button"
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <>
      <label htmlFor={ascId}>
        <input
          type="radio"
          name={radioName}
          id={ascId}
          checked={isAsc}
          onChange={() => {
            setIsAsc(true);
          }}
        />
        昇順
      </label>

      <label htmlFor={descId}>
        <input
          type="radio"
          name={radioName}
          id={descId}
          checked={!isAsc}
          onChange={() => {
            setIsAsc(false);
          }}
        />
        降順
      </label>

      <ol className={isAsc ? 'history-list' : 'history-list-reverse'}>
        {moves}
      </ol>
    </>
  );
};

export default HistoryList;
