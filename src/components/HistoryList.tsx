import React, { useState } from 'react';
import { HistoryItem } from 'stores/game';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import styled from 'styled-components';
import HistoryListItem from 'components/HisotyrListItem';

// type
interface HistoryListProps {
  history: HistoryItem[];
  stepNum: number;
  jumpTo: (move: number) => void;
}

// style
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
        <HistoryListItem
          selected={stepNum === move}
          onClick={() => jumpTo(move)}
          desc={desc}
        />
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
