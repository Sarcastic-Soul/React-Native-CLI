export const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
] as const;

export const COLORS = {
    X: '#4CAF50',
    O: '#2196F3',
    Xwin: '#74c69d',
    Owin: '#48cae4',
    RESET: '#FF5722',
    BACKGROUND: '#f7ede2',
    TEXT: '#333',
    BORDER: '#ddd',
    BUTTON: '#d90429',
    ACTIVE: '#9d4edd',
    ACTIVE_THUMB: '#3c096c',
    INACTIVE: '#8d99ae',
    INACTIVE_THUMB: '#f4f3f4',
} as const;
