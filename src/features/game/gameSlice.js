/* eslint-disable consistent-return */
import { createSlice } from '@reduxjs/toolkit';

import { MARKS } from '../../utils/constants';
import { checkBoardStatus } from '../../utils/utilFns';

const initialState = {
  round: null,
  mode: null,
  board: [...Array(9).fill('')],
  currentTurn: MARKS.X,
  players: [
    { player1: MARKS.X, id: null },
    { player2: MARKS.O, id: null }
  ],
  finalState: null,
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
      // TODO handle error in component by calling the ui slice
      state.board[position] = mark;
      state.currentTurn = mark === MARKS.X ? MARKS.O : MARKS.X;
      const isWinner = checkBoardStatus(state.board, mark);
      if (isWinner) {
        state.finalState = mark;
        state.currentWinningCoords = [position];
        if (mark === MARKS.X) {
          state.winsX += 1;
        } else {
          state.winsO += 1;
        }
      }
      state.round += 1;
      if (state.round === 9 && !isWinner) {
        state.finalState = 'tie';
        state.ties += 1;
      }
    },
    reset: () => initialState
  }
});

export const { init, play, reset } = gameSlice.actions;
export default gameSlice.reducer;
