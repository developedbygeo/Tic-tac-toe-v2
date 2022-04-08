import { createSlice } from '@reduxjs/toolkit';

import { marksLookup } from '../../utils/constants';
import { checkBoardStatus } from '../../utils/utilFns';

const initialState = {
  round: null,
  mode: null,
  board: [...Array(9).fill('')],
  currentTurn: marksLookup.X,
  players: [
    { player1: marksLookup.X, id: null },
    { player2: marksLookup.O, id: null }
  ],
  finalState: null,
  winner: null,
  currentWinningCoords: null,
  winsX: 0,
  winsO: 0,
  ties: 0
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    init: (state, action) => {
      const { mode, players } = action.payload;
      state.mode = mode;
      state.players = players;
      state.round = 0;
    },
    play: (state, action) => {
      const { position, mark } = action.payload;
      if (state.board[position] !== '') return;
      state.board[position] = mark;
      state.currentTurn = mark === marksLookup.X ? marksLookup.O : marksLookup.X;
      const isWinner = checkBoardStatus(state.board, mark);
      if (isWinner) {
        state.finalState = 'WON';
        state.winner = mark;
        state.currentWinningCoords = [position];
        if (mark === marksLookup.X) {
          state.winsX += 1;
        } else {
          state.winsO += 1;
        }
      }
      state.round += 1;
      if (state.round === 9 && !isWinner) {
        state.finalState = 'TIE';
        state.ties += 1;
      }
    },
    restartRound: (state) => {
      state.board = initialState.board;
      state.currentTurn = 'X';
      state.round = 0;
      state.finalState = null;
      state.winner = null;
    },
    quit: () => initialState
  }
});

export const { init, play, restartRound, quit } = gameSlice.actions;
export default gameSlice.reducer;
