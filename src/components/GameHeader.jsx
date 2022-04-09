import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card } from './UI/Card';
import CustomButton from './UI/Buttons';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Restart } from '../assets/icon-restart.svg';

import { gameStatusCommentary, turnOrWinner } from '../utils/utilFns';

import Modal from './UI/Modal';
import GameOverDialogue from './GameOverDialogue';
import GameRestartDialogue from './GameRestartDialogue';

const GameHeader = () => {
  const [showModal, setShowModal] = useState(true);
  const [restartModal, setRestartModal] = useState(false);
  const { currentTurn, finalState, winner } = useSelector((state) => state.game);

  const turnText = turnOrWinner(finalState, winner, currentTurn);
  const currentStatusText = gameStatusCommentary(finalState, winner);

  const handleQuitModal = () => setShowModal((prevState) => !prevState);

  const handleRestartModal = () => setRestartModal((prevState) => !prevState);

  useEffect(() => {
    if (finalState) {
      setShowModal(true);
    }
  }, [finalState]);

  return (
    <>
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Card className="px-4 py-2 text-custom-silver font-bold flex flex-row gap-2 items-center justify-center text-center md:px-10 md:py-3">
          {turnText && (
            <span className="font-bold w-full text-center text-s landmobileSS:text-base">
              {turnText}
            </span>
          )}
          <span className="font-bold w-full text-center text-s landmobileSS:text-base">
            {currentStatusText}
          </span>
        </Card>
        <CustomButton
          onClick={handleRestartModal}
          title="Restart game"
          type="basic"
          className="px-6 py-3 landmobileSS:px-3 landmobileSS:py-2"
        >
          <Restart />
        </CustomButton>
      </div>
      {finalState && showModal && (
        <Modal>
          <GameOverDialogue onDisable={handleQuitModal} />
        </Modal>
      )}
      {restartModal && (
        <Modal onDisable={handleRestartModal}>
          <GameRestartDialogue onDisable={handleRestartModal} />
        </Modal>
      )}
    </>
  );
};

export default GameHeader;
