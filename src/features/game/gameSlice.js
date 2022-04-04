/* eslint-disable consistent-return */
import { createSlice } from '@reduxjs/toolkit';

import { MARKS, PLAYERS } from '../../utils/constants';
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
  currentRoundWinner: null,
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
      state.winner = null;
    },
    play: (state, action) => {
      const { row, col, mark } = action.payload;
      if (state.map[row][col] !== '') return false;
      // TODO handle error in component by calling the ui slice
      state.map[row][col] = mark;
      const isWinner = checkBoardStatus(state.map, mark);
      if (isWinner) {
        state.currentRoundWinner = mark;
        state.currentWinningCoords = [row, col];
        if (mark === MARKS.X) {
          state.winsX += 1;
        } else {
          state.winsO += 1;
        }
      }
      state.round += 1;
    },
    reset: () => initialState
  }
});

export const { init, play, reset } = gameSlice.actions;
export default gameSlice.reducer;
