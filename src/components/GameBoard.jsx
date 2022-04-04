/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';
import { Card } from './UI/Card';

const GameBoard = () => {
  const { board } = useSelector((state) => state.game);

  return (
    <div className="h-3/5 grid grid-cols-3 grid-rows-3 place-items-center gap-6">
      {board.map((card, index) => (
        <Card key={index} className="w-full h-full" />
      ))}
    </div>
  );
};

export default GameBoard;
