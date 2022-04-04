import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import uiReducer from '../features/ui/uiSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
    ui: uiReducer
  }
});

export default store;
