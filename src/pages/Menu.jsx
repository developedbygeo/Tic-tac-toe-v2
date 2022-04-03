import { useState } from 'react';

import { ReactComponent as Logo } from '../assets/logo.svg';
import CustomButton from '../components/UI/Buttons';
import Card from '../components/UI/Card';

const marks = [
  { mark: 'X', key: 1 },
  { mark: 'O', key: 2 }
];

// TODO: refactor into smaller components

const Menu = () => {
  const [selectedMark, setSelectedMark] = useState('X');

  const markSelectionHandler = (mark) => {
    setSelectedMark(mark);
  };

  return (
    <section className="flex flex-col gap-5 justify-evenly items-center h-4/6  w-5/6h-4/6  w-5/6">
      <div className="py-2">
        <Logo />
      </div>
      <section className="custom-card bg-semi-dark-navy h-3/6 w-full rounded-lg flex flex-col justify-between items-center py-4 text-custom-silver">
        <h1 className="font-bold uppercase tracking-wider">pick player 1&apos;s mark</h1>
        <div className="p-4 grid grid-cols-2 gap-1 w-3/4 bg-dark-navy rounded-md">
          {marks.map((markObj) => (
            <CustomButton
              key={markObj.key}
              onClick={markSelectionHandler.bind(null, markObj.mark)}
              title={`Select ${markObj.mark}`}
              className={`text-2xl font-bold py-2 px-1 rounded-md ${
                selectedMark === markObj.mark
                  ? 'bg-custom-silver text-dark-navy'
                  : 'text-custom-silver hover:bg-semi-dark-navy bg-opacity-25'
              }`}
            >
              {markObj.mark}
            </CustomButton>
          ))}
        </div>
        <h2 className="font-normal uppercase tracking-wide text-sm opacity-50">
          Remember: x goes first
        </h2>
      </section>
      <div className="flex flex-col gap-5 w-full">
        <CustomButton
          title="Play against the computer"
          className="btn-primary-one bg-light-yellow  w-full"
        >
          New Game (VS CPU)
        </CustomButton>
        <CustomButton
          title="Play against a friend"
          className="btn-primary-two bg-light-blue w-full"
        >
          New Game (VS Player)
        </CustomButton>
      </div>
    </section>
  );
};

export default Menu;
