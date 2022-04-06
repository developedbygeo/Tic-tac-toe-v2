import { WINNING_COMBOS } from './constants';

export const checkBoardStatus = (board, mark) => {
  return WINNING_COMBOS.some((combination) => {
    return combination.every((index) => board[index] === mark);
  });
};

const isBoardFull = (board) => {
  return board.every((mark) => mark !== '');
};

const getEmptyIndices = (board) => board.filter((el) => el === '');

export const averageCpu = (board, mark) => {
  const opponentMark = mark === 'X' ? 'O' : 'X';
  const cpuBoard = [...board];
  const cpuIndex = getEmptyIndices(cpuBoard);
  cpuBoard[cpuIndex] = mark;

  if (checkBoardStatus(cpuBoard, mark)) return { move: cpuIndex, score: 10 };
  if (checkBoardStatus(cpuBoard, opponentMark)) return { move: cpuIndex, score: -10 };
  if (isBoardFull(cpuBoard)) return { move: cpuIndex, score: 0 };

  let bestMove;
  let bestScore;

  for (let i = 0; i < cpuBoard.length; i += 1) {
    if (cpuBoard[i] === '') {
      cpuBoard[i] = mark;
      const score = averageCpu(cpuBoard, mark);
      cpuBoard[i] = '';

      if (bestScore === undefined || score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};
