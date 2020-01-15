import React from 'react';

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

  return <ol>{moves}</ol>;
};

export default HistoryList;
