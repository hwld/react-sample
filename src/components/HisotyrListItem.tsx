import React from 'react';
import { ButtonProps, Button, Theme } from '@material-ui/core';
import styled from 'styled-components';

interface HistoryItemProps {
  onClick: () => void;
  selected: boolean;
  desc: string;
}

const StyledButton = styled(Button)`
  background-color: ${(props: ButtonProps & { theme: Theme }) =>
    props.className === 'selected'
      ? props.theme.palette.secondary.dark
      : props.theme.palette.secondary.main};
  width: 20em;
`;

const HistoryListItem: React.FC<HistoryItemProps> = ({
  selected,
  desc,
  onClick,
}) => {
  return (
    <StyledButton
      className={selected ? 'selected' : 'normal'}
      variant="outlined"
      onClick={onClick}
    >
      {desc}
    </StyledButton>
  );
};

export default HistoryListItem;
