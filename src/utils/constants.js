import { v4 as uuidv4 } from 'uuid';

import outlineX from '../assets/icon-x-outline.svg';
import outlineO from '../assets/icon-o-outline.svg';

export const hoverLookup = {
  X: outlineX,
  O: outlineO
};

export const MARKS = {
  X: 'X',
  O: 'O'
};

export const SELECTION_MARKS = [
  { mark: 'X', id: uuidv4() },
  { mark: 'O', id: uuidv4() }
];

export const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
