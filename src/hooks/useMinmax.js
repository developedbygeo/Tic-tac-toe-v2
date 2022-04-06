import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { play } from '../features/game/gameSlice';

import { optimalPlay } from '../utils/utilFns';
import { hoverLookup } from '../utils/constants';

const useMinmax = () => {
  const dispatch = useDispatch();
  const { board, mode, currentTurn, players, finalState } = useSelector((state) => state.game);

  useEffect(() => {
    if (mode === 'CPU' && currentTurn !== players[0].mark && !finalState) {
      const selection = optimalPlay(board, players[1].mark);
      const timer = setTimeout(() => {
        dispatch(play({ position: selection, mark: players[1].mark }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [mode, players, currentTurn, board, finalState, dispatch]);

  return hoverLookup[players[0].mark];
};

export default useMinmax;
