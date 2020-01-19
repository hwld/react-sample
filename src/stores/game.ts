import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

function calculateGameStatus(squares: (string | null)[]): GameStatusItem {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // 勝敗がついた
      return { isFinish: true, winner: squares[a], winFactors: [a, b, c] };
    }
  }

  if (!squares.includes(null)) {
    // 引き分け
    return { isFinish: true, winner: null, winFactors: [null, null, null] };
  }

  // 継続
  return { isFinish: false, winner: null, winFactors: [null, null, null] };
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
