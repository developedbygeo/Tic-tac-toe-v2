import { useSelector, useDispatch } from 'react-redux';
import { play } from '../features/game/gameSlice';

import { hoverLookup } from '../utils/constants';

const usePlayer = () => {
  const dispatch = useDispatch();
  const { mode, currentTurn, players, finalState } = useSelector((state) => state.game);

  const playerMoveHandler = (index) => {
    if (finalState) return;
    switch (mode) {
      case 'CPU':
        if (currentTurn === players[0].mark) {
          const { mark } = players[0];
          dispatch(play({ position: index, mark }));
        }
        break;
      case 'P2':
        if (currentTurn === players[0].mark) {
          const { mark } = players[0];
          dispatch(play({ position: index, mark }));
        } else {
          const { mark } = players[1];
          dispatch(play({ position: index, mark }));
        }
        break;
      default:
    }
  };

  return [playerMoveHandler, hoverLookup[currentTurn]];
};

export default usePlayer;
