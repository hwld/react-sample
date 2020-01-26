import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

interface HistoryItemProps {
  onClick: () => void;
  selected: boolean;
  desc: string;
}

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.palette.secondary.main};
  width: 20em;

  &.selected {
    background-color: ${props => props.theme.palette.secondary.dark};
  }
`;

const HistoryListItem: React.FC<HistoryItemProps> = ({
  selected,
  desc,
  onClick,
}) => {
  return (
    <StyledButton
      className={selected ? 'selected' : ''}
      variant="outlined"
      onClick={onClick}
    >
      {desc}
    </StyledButton>
  );
};

export default HistoryListItem;
