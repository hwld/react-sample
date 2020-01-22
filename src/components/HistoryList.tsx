import React, { useState } from 'react';
import { HistoryItem } from 'stores/game';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

interface HistoryListProps {
  history: HistoryItem[];
  stepNum: number;
  jumpTo: (move: number) => void;
}

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
        <Button
          variant="outlined"
          className={stepNum === move ? 'selected' : ''}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </Button>
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
              control={<Radio color="primary" />}
              label="昇順"
            />
            <FormControlLabel
              value="desc"
              control={<Radio color="primary" />}
              label="降順"
            />
          </div>
        </RadioGroup>
      </FormControl>

      <ol className={value === 'asc' ? 'history-list' : 'history-list-reverse'}>
        {moves}
      </ol>
    </>
  );
};

export default HistoryList;
