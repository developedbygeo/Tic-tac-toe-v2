import { WINNING_COMBOS } from './constants';

// TODO add the remaining utils
// eslint-disable-next-line import/prefer-default-export
export const checkBoardStatus = (board, mark) => {
  return WINNING_COMBOS.some((combination) => {
    return combination.every((index) => board[index] === mark);
  });
};
