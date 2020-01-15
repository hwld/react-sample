import React from 'react';

interface SquareProps {
  value: string | null;
  isWinFactor: boolean;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, isWinFactor, onClick }) => {
  let classNames = 'square';
  if (isWinFactor) classNames += ' winFactor';

  return (
    <button type="button" className={classNames} onClick={() => onClick()}>
      {value}
    </button>
  );
};

export default Square;
