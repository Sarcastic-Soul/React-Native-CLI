import { useState, useCallback, useEffect } from 'react';
import { Board, Player, WinningLine, GameMode } from '../types';
import { checkWinner } from '../utils/gameLogic';
import { minimax } from '../utils/minimax';
import { WINNING_COMBINATIONS } from '../constants';
import { COLORS } from '../constants';

export const useGame = () => {
    const [board, setBoard] = useState<Board>(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [winner, setWinner] = useState<Player | 'draw' | null>(null);
    const [winningLine, setWinningLine] = useState<WinningLine | null>(null);
    const [gameMode, setGameMode] = useState<GameMode>('Friend');

    const updateGameState = useCallback((newBoard: Board) => {
        const winner = checkWinner(newBoard);
        if (winner) {
            setWinner(winner);
            const winningCombination = WINNING_COMBINATIONS.find(([a, b, c]) =>
                newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]
            );
            if (winningCombination) {
                setWinningLine({ combination: winningCombination, color: winner === 'X' ? COLORS.Xwin : COLORS.Owin });
            }
        }
    }, []);

    const handleBotMove = useCallback(() => {
        const { move } = minimax(board, 0, true, 'O', 'X');
        if (move !== undefined) {
            const newBoard = [...board];
            newBoard[move] = 'O';
            setBoard(newBoard);
            setCurrentPlayer('X');
            updateGameState(newBoard);
        }
    }, [board, updateGameState]);

    useEffect(() => {
        if (gameMode === 'Bot' && currentPlayer === 'O' && !winner) {
            setTimeout(handleBotMove, 500);
        }
    }, [gameMode, currentPlayer, winner, handleBotMove]);

    const handleMove = (index: number): void => {
        if (winner || board[index] || (gameMode === 'Bot' && currentPlayer === 'O')) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X');
        updateGameState(newBoard);
    };

    const resetGame = (): void => {
        setBoard(Array(9).fill(''));
        setCurrentPlayer('X');
        setWinner(null);
        setWinningLine(null);
    };

    const toggleGameMode = (): void => {
        setGameMode(prev => prev === 'Friend' ? 'Bot' : 'Friend');
        resetGame();
    };

    return {
        board,
        currentPlayer,
        winner,
        winningLine,
        gameMode,
        handleMove,
        resetGame,
        toggleGameMode,
    };
};
