import React from 'react';
import Button from '@material-ui/core/Button';
import { Clear, PanoramaFishEye } from '@material-ui/icons';

interface SquareProps {
  value: string | null;
  isWinFactor: boolean;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, isWinFactor, onClick }) => {
  let classNames = 'square';
  if (isWinFactor) classNames += ' winFactor';

  const renderIcon = () => (value === 'O' ? <PanoramaFishEye /> : <Clear />);

  return (
    <Button
      disableElevation
      variant={isWinFactor ? 'contained' : 'outlined'}
      className={classNames}
      onClick={() => onClick()}
    >
      {value == null ? null : renderIcon()}
    </Button>
  );
};

export default Square;
