// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable } from 'react-native';
import { Board } from './components/Board';
import { useGame } from './hooks/useGame';
import { COLORS } from './constants';
import { GameControls } from './components/GameControls';

const App: React.FC = () => {
    const {
        board,
        currentPlayer,
        winner,
        winningLine,
        gameMode,
        handleMove,
        resetGame,
        toggleGameMode
    } = useGame();

    const getStatusText = (): string => {
        if (winner === 'draw') return 'It\'s a Draw!';
        if (winner) return `${winner} Wins!`;
        return `${currentPlayer}'s Turn`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <Board
                board={board}
                onPress={handleMove}
                winningLine={winningLine}
            />
            <Text style={styles.status}>{getStatusText()}</Text>
            <GameControls
                gameMode={gameMode}
                onToggleMode={toggleGameMode}
                onReset={resetGame}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.TEXT,
        marginBottom: 40,
    },
    status: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.TEXT,
    },
    resetButton: {
        marginTop: 30,
        backgroundColor: COLORS.RESET,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;
