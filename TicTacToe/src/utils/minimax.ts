import { Board, Player } from '../types';
import { checkWinner } from './gameLogic';

export const minimax = (
  board: Board,
  depth: number,
  isMaximizing: boolean,
  player: Player,
  opponent: Player
): { score: number; move?: number } => {
  const result = checkWinner(board);

  if (result === player) return { score: 10 - depth };
  if (result === opponent) return { score: depth - 10 };
  if (result === 'draw') return { score: 0 };

  const availableMoves = board
    .map((cell, index) => cell === '' ? index : -1)
    .filter(index => index !== -1);

  if (isMaximizing) {
    let bestScore = -Infinity;
    let bestMove: number | undefined;

    for (const move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = player;
      const { score } = minimax(newBoard, depth + 1, false, player, opponent);

      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    return { score: bestScore, move: bestMove };
  } else {
    let bestScore = Infinity;
    let bestMove: number | undefined;

    for (const move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = opponent;
      const { score } = minimax(newBoard, depth + 1, true, player, opponent);

      if (score < bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    return { score: bestScore, move: bestMove };
  }
};
