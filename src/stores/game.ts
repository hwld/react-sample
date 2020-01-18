import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calculateGameStatus } from 'util/calculateGameStatus';

export interface HistoryItem {
  squares: string[] | null[];
  hand: { col: number; row: number };
  id: number;
}

export interface GameStatusItem {
  isFinish: boolean;
  winner: string | null;
  winFactors: (number | null)[];
}

interface GameState {
  history: HistoryItem[];
  nextHistoryId: number;
  stepNumber: number;
  xIsNext: boolean;
  gameStatus: GameStatusItem;
}

const gameInitialState: GameState = {
  history: [
    {
      squares: Array(9).fill(null),
      hand: { col: 0, row: 0 },
      id: 0,
    },
  ],
  nextHistoryId: 1,
  stepNumber: 0,
  xIsNext: true,
  gameStatus: { isFinish: false, winner: null, winFactors: [null, null, null] },
};

const slice = createSlice({
  name: 'game',
  initialState: gameInitialState,
  reducers: {
    junpTo(state, action: PayloadAction<number>) {
      const stepNumber = action.payload;

      return {
        ...state,
        stepNumber,
        xIsNext: stepNumber % 2 === 0,
        gameStatus: calculateGameStatus(state.history[stepNumber].squares),
      };
    },
    addNextMove(state, action: PayloadAction<number>) {
      const index = action.payload;
      const col = (index % 3) + 1;
      const row = Math.floor(index / 3) + 1;
      const history = state.history.slice(0, state.stepNumber + 1);
      const squares = history[state.stepNumber].squares.slice();

      if (state.gameStatus.isFinish || squares[index]) return state;

      squares[index] = state.xIsNext ? 'X' : 'O';

      return {
        ...state,
        history: history.concat([
          {
            squares,
            hand: { col, row },
            id: state.nextHistoryId,
          },
        ]),
        nextHistoryId: state.nextHistoryId + 1,
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        gameStatus: calculateGameStatus(squares),
      };
    },
  },
});

export const { junpTo, addNextMove } = slice.actions;

export default slice.reducer;
