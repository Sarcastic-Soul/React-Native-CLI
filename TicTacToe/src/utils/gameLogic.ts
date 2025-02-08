import { Board, Player } from '../types';
import { WINNING_COMBINATIONS } from '../constants';

export const checkWinner = (board: Board): Player | 'draw' | null => {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  return board.includes('') ? null : 'draw';
};
