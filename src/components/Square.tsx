import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Clear, PanoramaFishEye } from '@material-ui/icons';

interface SquareProps {
  value: string | null;
  isWinFactor: boolean;
  onClick: () => void;
}

const SquareButton = styled(Button)<{ isWinFactor: boolean }>`
  background-color: ${props => (props.isWinFactor ? 'yellow' : 'white')};
  height: 60px;
  width: 60px;
`;

const Square: React.FC<SquareProps> = ({ value, isWinFactor, onClick }) => {
  const renderIcon = () => (value === 'O' ? <PanoramaFishEye /> : <Clear />);

  return (
    <SquareButton
      isWinFactor={isWinFactor}
      disableElevation
      variant="outlined"
      onClick={() => onClick()}
    >
      {value == null ? null : renderIcon()}
    </SquareButton>
  );
};

export default Square;
