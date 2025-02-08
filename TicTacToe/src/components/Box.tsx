import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { BoxProps } from '../types';
import { COLORS } from '../constants';

export const Box: React.FC<BoxProps> = ({
    value,
    index,
    onPress,
    isWinningBox,
    winColor
}) => (
    <Pressable
        style={[
            styles.box,
            value === 'X' && styles.xBox,
            value === 'O' && styles.oBox,
            isWinningBox && { backgroundColor: winColor },
        ]}
        onPress={() => onPress(index)}
    >
        <Text style={[
            styles.boxText,
            value === 'X' ? styles.xText : styles.oText

        ]}>
            {value}
        </Text>
    </Pressable>
);

const styles = StyleSheet.create({
    box: {
        width: '33.33%',
        height: '33.33%',
        borderWidth: 2,
        borderColor: COLORS.BORDER,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    xBox: {
        backgroundColor: '#E8F5E9',
    },
    oBox: {
        backgroundColor: '#E3F2FD',
    },
    boxText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    xText: {
        color: COLORS.X,
    },
    oText: {
        color: COLORS.O,
    },
});
