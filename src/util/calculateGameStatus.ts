export interface GameStatusItem {
  isFinish: boolean;
  winner: string | null;
  winFactors: (number | null)[];
}

export function calculateGameStatus(
  squares: (string | null)[],
): GameStatusItem {
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
