import { useSelector } from 'react-redux';
import { Card } from './UI/Card';
import CustomButton from './UI/Buttons';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Restart } from '../assets/icon-restart.svg';

// TODO add logo link to menu page

const GameHeader = () => {
  const { currentTurn } = useSelector((state) => state.game);

  return (
    <div className="w-full h-fit flex flex-row justify-between items-center">
      <Logo />
      <Card className="px-4 py-2 text-custom-silver font-bold flex flex-row gap-2 items-center justify-center">
        <span>{currentTurn}</span> <span>TURN</span>
      </Card>
      <CustomButton type="basic" className="p-3">
        <Restart />
      </CustomButton>
    </div>
  );
};

export default GameHeader;
