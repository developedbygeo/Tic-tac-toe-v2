import { winningCombosLookup } from './constants';

export const checkBoardStatus = (board, mark) => {
  return winningCombosLookup.some((combination) => {
    return combination.every((index) => board[index] === mark);
  });
};

const isBoardFull = (board) => {
  return board.every((mark) => mark !== '');
};

const minimax = (board, cpuMark, humanMark, isMax) => {
  let optimalRes = isMax ? -10000 : 10000;

  if (checkBoardStatus(board, cpuMark)) return 10;
  if (checkBoardStatus(board, humanMark)) return -10;
  if (isBoardFull(board)) return 0;

  for (let i = 0; i < board.length; i += 1) {
    if (board[i] === '') {
      board[i] = isMax ? cpuMark : humanMark;
      const result = minimax(board, cpuMark, humanMark, !isMax);
      board[i] = '';
      optimalRes = isMax ? Math.max(result, optimalRes) : Math.min(result, optimalRes);
    }
  }
  return optimalRes;
};

export const optimalPlay = (board, cpuMark) => {
  const boardCopy = [...board];
  const opponentMark = cpuMark === 'X' ? 'O' : 'X';
  let bestScore = -10000;
  let move;
  for (let i = 0; i < boardCopy.length; i += 1) {
    if (boardCopy[i] === '') {
      boardCopy[i] = cpuMark;
      const score = minimax(boardCopy, cpuMark, opponentMark, false);
      boardCopy[i] = '';
      bestScore = Math.max(score, bestScore);
      if (bestScore === score) {
        move = i;
      }
    }
  }
  return move;
};
