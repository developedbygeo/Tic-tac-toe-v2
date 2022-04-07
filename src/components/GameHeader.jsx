import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card } from './UI/Card';
import CustomButton from './UI/Buttons';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Restart } from '../assets/icon-restart.svg';

import Modal from './UI/Modal';
import GameOverDialogue from './GameOverDialogue';
import GameRestartDialogue from './GameRestartDialogue';

const GameHeader = () => {
  const [showModal, setShowModal] = useState(true);
  const [restartModal, setRestartModal] = useState(false);
  const { currentTurn, finalState, winner } = useSelector((state) => state.game);
  const finalStateText = finalState && winner ? `${winner} ${finalState}` : `${finalState}`;
  const turnText = `${currentTurn}`;

  const handleQuit = () => setShowModal((prevState) => !prevState);

  const handleRestart = () => {
    setRestartModal((prevState) => !prevState);
  };

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
        <Card className="px-4 py-2 text-custom-silver font-bold flex flex-row gap-1 items-center justify-center text-center">
          <span className="font-bold w-full text-center">
            {finalState ? finalStateText : turnText}
          </span>
          <span>{!finalState && 'TURN'}</span>
        </Card>
        <CustomButton onClick={handleRestart} title="Restart game" type="basic" className="p-3">
          <Restart />
        </CustomButton>
      </div>
      {finalState && showModal && (
        <Modal>
          <GameOverDialogue onDisable={handleQuit} />
        </Modal>
      )}
      {restartModal && (
        <Modal onDisable={handleRestart}>
          <GameRestartDialogue onDisable={handleRestart} />
        </Modal>
      )}
    </>
  );
};

export default GameHeader;
