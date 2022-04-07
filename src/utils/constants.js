import { v4 as uuidv4 } from 'uuid';

import outlineX from '../assets/icon-x-outline.svg';
import outlineO from '../assets/icon-o-outline.svg';

import { ReactComponent as MarkX } from '../assets/icon-x.svg';
import { ReactComponent as MarkO } from '../assets/icon-o.svg';

export const hoverLookup = {
  X: outlineX,
  O: outlineO
};

export const svgLookup = {
  X: <MarkX />,
  O: <MarkO />,
  '': ''
};

export const marksLookup = {
  X: 'X',
  O: 'O'
};

export const selectionMarksLookup = [
  { mark: 'X', id: uuidv4() },
  { mark: 'O', id: uuidv4() }
];

export const winningCombosLookup = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

export const cpuDialogues = {
  win: 'YOU WON',
  loss: 'OH NO, YOU LOST...'
};
export const p2Dialogues = (player) => `${player} WON`;

export const winnerColorLookup = {
  X: '#31C3BD',
  O: '#F2B137',
  null: '#A8BFC9'
};
