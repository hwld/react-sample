import React, { useState } from 'react';

export interface HistoryItem {
  squares: string[] | null[];
  hand: { col: number; row: number };
  id: number;
}

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
  const [order, setOrder] = useState('asc');

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
      <label htmlFor="asc">
        <input
          type="radio"
          value="asc"
          id="asc"
          name="order"
          checked={order === 'asc'}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
        昇順
      </label>

      <label htmlFor="desc">
        <input
          type="radio"
          value="desc"
          id="desc"
          name="order"
          checked={order === 'desc'}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
        降順
      </label>

      <ol className={order === 'asc' ? 'history-list' : 'history-list-reverse'}>
        {moves}
      </ol>
    </>
  );
};

export default HistoryList;
