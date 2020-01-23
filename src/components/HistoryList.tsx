import React, { useState } from 'react';
import { HistoryItem } from 'stores/game';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';

// type
interface HistoryListProps {
  history: HistoryItem[];
  stepNum: number;
  jumpTo: (move: number) => void;
}

interface ThemeProps {
  theme: Theme;
}

type StyledHistoryItemProps = HistoryListProps &
  ThemeProps & { selected: boolean };

// style
const StyledHistoryItem = styled(({ selected, children, ...props }) => (
  <Button {...props}>{children}</Button>
))`
  background-color: ${(props: StyledHistoryItemProps) =>
    props.selected
      ? props.theme.palette.secondary.dark
      : props.theme.palette.secondary.main};
`;

const StyledHistoryList = styled.ol<{ isAsc: boolean }>`
  display: flex;
  flex-direction: ${props => (props.isAsc ? 'column' : 'column-reverse')};
`;

// component
const HistoryList: React.FC<HistoryListProps> = ({
  history,
  stepNum,
  jumpTo,
}) => {
  const [value, setValue] = useState('asc');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #{col: ${step.hand.col} , row: ${step.hand.row}}`
      : 'Go to game start';

    return (
      <li key={step.id}>
        <StyledHistoryItem
          variant="outlined"
          selected={stepNum === move}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </StyledHistoryItem>
      </li>
    );
  });

  return (
    <>
      <FormControl>
        <RadioGroup value={value} onChange={handleChange}>
          <div>
            <FormControlLabel
              value="asc"
              defaultChecked
              control={<Radio />}
              label="昇順"
            />
            <FormControlLabel value="desc" control={<Radio />} label="降順" />
          </div>
        </RadioGroup>
      </FormControl>

      <StyledHistoryList isAsc={value === 'asc'}>{moves}</StyledHistoryList>
    </>
  );
};

export default HistoryList;
