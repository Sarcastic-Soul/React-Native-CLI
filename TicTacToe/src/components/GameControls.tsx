import React from 'react';
import { View, Text, Pressable, StyleSheet, Switch } from 'react-native';
import { GameMode } from '../types';
import { COLORS } from '../constants';

interface GameControlsProps {
    gameMode: GameMode;
    onToggleMode: () => void;
    onReset: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
    gameMode,
    onToggleMode,
    onReset,
}) => (
    <View style={styles.controls}>
        <View style={styles.switchContainer}>
            <Switch
                style={styles.modeToggle}
                value={gameMode === 'Bot'}
                onValueChange={onToggleMode}
                trackColor={{ false: COLORS.INACTIVE, true: COLORS.ACTIVE }}
                thumbColor={gameMode == 'Bot' ? COLORS.ACTIVE_THUMB : COLORS.INACTIVE_THUMB}
            />
            <Text style={styles.switchLabel}>BOT</Text>
        </View>
        <Pressable style={styles.resetButton} onPress={onReset}>
            <Text style={styles.buttonText}>Reset Game</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    modeToggle: {
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
        marginRight: 10,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchLabel: {
        color: COLORS.TEXT,
        fontSize: 20,
        fontWeight: 'bold',
    },
    resetButton: {
        backgroundColor: COLORS.BUTTON,
        padding: 10,
        borderRadius: 5,
        height: 50,
        width: 150,
    },
    buttonText: {
        color: '#edf2f4',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },

});
