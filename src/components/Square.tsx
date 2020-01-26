import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Clear, PanoramaFishEye } from '@material-ui/icons';

interface SquareProps {
  value: string | null;
  isWinFactor: boolean;
  onClick: () => void;
}

const SquareButton = styled(Button)`
  background-color: ${props => props.theme.palette.secondary.main};
  height: 60px;
  width: 60px;

  &.winFactor {
    background-color: ${props => props.theme.palette.secondary.dark};
  }
`;

const Square: React.FC<SquareProps> = ({ value, isWinFactor, onClick }) => {
  const renderIcon = () => (value === 'O' ? <PanoramaFishEye /> : <Clear />);

  return (
    <SquareButton
      className={isWinFactor ? 'winFactor' : ''}
      disableElevation
      variant="outlined"
      onClick={() => onClick()}
    >
      {value == null ? ' ' : renderIcon()}
    </SquareButton>
  );
};

export default Square;
