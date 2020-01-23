import React from 'react';
import styled from 'styled-components';
import { Button, Theme } from '@material-ui/core';
import { Clear, PanoramaFishEye } from '@material-ui/icons';

interface SquareProps {
  value: string | null;
  isWinFactor: boolean;
  onClick: () => void;
}

interface ThemeProps {
  theme: Theme;
}

const SquareButton = styled(({ isWinFactor, children, ...props }) => (
  <Button {...props}>{children}</Button>
))`
  background-color: ${(props: SquareProps & ThemeProps) =>
    props.isWinFactor
      ? props.theme.palette.secondary.light
      : props.theme.palette.secondary.main};
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
      {value == null ? ' ' : renderIcon()}
    </SquareButton>
  );
};

export default Square;
