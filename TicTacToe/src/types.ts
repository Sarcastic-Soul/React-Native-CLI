export type Player = 'X' | 'O';
export type Cell = Player | '';
export type Board = Cell[];
export type GameMode = 'Bot' | 'Friend';
export type WinningLine = {
  combination: number[];
  color: string;
};

export interface BoxProps {
    value: Cell;
    index: number;
    onPress: (index: number) => void;
    isWinningBox: boolean;
    winColor?: string;
}
