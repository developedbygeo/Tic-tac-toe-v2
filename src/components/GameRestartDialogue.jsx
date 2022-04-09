import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { restartRound } from '../features/game/gameSlice';

import CustomButton from './UI/Buttons';

const GameRestartDialogue = ({ onDisable }) => {
  const dispatch = useDispatch();

  const restartGameHandler = () => {
    dispatch(restartRound());
    onDisable();
  };

  return (
    <article className="h-full w-full p-2 flex flex-col items-center justify-evenly ">
      <h1 className="text-custom-silver text-lg tracking-wider font-bold lg:text-xl landmobileSS:text-s">
        RESTART GAME?
      </h1>
      <div className="flex flex-row gap-3">
        <CustomButton
          onClick={onDisable}
          title="Quit the game"
          className="text-center py-2 landmobileSS:text-base"
          type="basic"
          size="md"
        >
          NO, CANCEL
        </CustomButton>
        <CustomButton
          onClick={restartGameHandler}
          title="Restart round"
          className="py-2 landmobileSS:text-base"
          type="primary"
          size="md"
        >
          YES, RESTART
        </CustomButton>
      </div>
    </article>
  );
};

GameRestartDialogue.propTypes = {
  onDisable: PropTypes.func.isRequired
};

export default GameRestartDialogue;
