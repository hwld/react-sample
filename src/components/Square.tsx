import React from 'react';
import styled from 'styled-components';
import { Button, Theme, ButtonProps } from '@material-ui/core';
import { Clear, PanoramaFishEye } from '@material-ui/icons';

interface SquareProps {
  value: string | null;
  isWinFactor: boolean;
  onClick: () => void;
}

const SquareButton = styled(Button)`
  background-color: ${(props: ButtonProps & { theme: Theme }) =>
    props.className === 'winFactor'
      ? props.theme.palette.secondary.dark
      : props.theme.palette.secondary.main};
  height: 60px;
  width: 60px;
`;

const Square: React.FC<SquareProps> = ({ value, isWinFactor, onClick }) => {
  const renderIcon = () => (value === 'O' ? <PanoramaFishEye /> : <Clear />);

  return (
    <SquareButton
      className={isWinFactor ? 'winFactor' : 'notWinFactor'}
      disableElevation
      variant="outlined"
      onClick={() => onClick()}
    >
      {value == null ? ' ' : renderIcon()}
    </SquareButton>
  );
};

export default Square;
