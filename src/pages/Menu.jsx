import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { init } from '../features/game/gameSlice';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { Card } from '../components/UI/Card';
import MenuSelect from '../components/MenuSelect';
import CustomButton from '../components/UI/Buttons';

const marks = [
  { mark: 'X', key: 1 },
  { mark: 'O', key: 2 }
];

// TODO: refactor into smaller components

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMark, setSelectedMark] = useState('X');
  const player2Mark = marks.find((mark) => mark.mark !== selectedMark).mark;

  const markSelectionHandler = (mark) => {
    setSelectedMark(mark);
  };

  const startGameHandler = (mode) => {
    dispatch(
      init({
        mode,
        players: [
          { mark: selectedMark, id: 'P1' },
          { mark: player2Mark, id: 'P2' }
        ]
      })
    );
    navigate('/game');
  };

  return (
    <section className="flex flex-col gap-5 justify-evenly items-center h-4/6  w-5/6h-4/6  w-5/6">
      <div className="py-2">
        <Logo />
      </div>
      <Card className="h-3/6 w-full flex flex-col justify-between items-center py-4 text-custom-silver">
        <h1 className="font-bold uppercase tracking-wider">pick player 1&apos;s mark</h1>
        <MenuSelect onMarkSelect={markSelectionHandler} selected={selectedMark} />
        <h2 className="font-normal uppercase tracking-wide text-sm opacity-50">
          Remember: x goes first
        </h2>
      </Card>
      <div className="flex flex-col gap-5 w-full">
        <CustomButton
          title="Play against the computer"
          type="primary"
          size="lg"
          onClick={() => startGameHandler('CPU')}
        >
          New Game (VS CPU)
        </CustomButton>
        <CustomButton
          title="Play against a friend"
          type="secondary"
          size="lg"
          onClick={() => startGameHandler('P2')}
        >
          New Game (VS Player)
        </CustomButton>
      </div>
    </section>
  );
};

export default Menu;
