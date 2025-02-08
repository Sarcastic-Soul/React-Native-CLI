import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Box } from './Box';
import { Board as BoardType, WinningLine } from '../types';

interface BoardProps {
    board: BoardType;
    onPress: (index: number) => void;
    winningLine: WinningLine | null;
}

export const Board: React.FC<BoardProps> = ({ board, onPress, winningLine }) => (
    <View style={styles.board}>
        {board.map((cell, index) => (
            <Box
                key={index}
                value={cell}
                index={index}
                onPress={onPress}
                isWinningBox={winningLine?.combination.includes(index) ?? false}
                winColor={winningLine?.color}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    board: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
