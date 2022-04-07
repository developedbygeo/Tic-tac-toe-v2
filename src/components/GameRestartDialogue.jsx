import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { restart } from '../features/game/gameSlice';

import CustomButton from './UI/Buttons';

const GameRestartDialogue = ({ onDisable }) => {
  const dispatch = useDispatch();

  const restartGameHandler = () => {
    dispatch(restart());
    onDisable();
  };

  return (
    <article className="h-full w-full p-2 flex flex-col items-center justify-evenly ">
      <h1 className="text-custom-silver text-xl tracking-wider font-bold">RESTART GAME?</h1>
      <div className="flex flex-row gap-3">
        <CustomButton
          onClick={onDisable}
          title="Quit the game"
          className="text-center py-2"
          type="basic"
          size="lg"
        >
          NO, CANCEL
        </CustomButton>
        <CustomButton
          onClick={restartGameHandler}
          title="Restart round"
          className="py-2"
          type="primary"
          size="lg"
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
