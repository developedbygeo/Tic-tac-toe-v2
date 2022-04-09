import { useSelector } from 'react-redux';

import { ScoreCard } from '../components/UI/Card';
import GameHeader from '../components/GameHeader';
import GameBoard from '../components/GameBoard';

const Game = () => {
  const { winsX, winsO, ties } = useSelector((state) => state.game);
  const { players } = useSelector((state) => state.game);

  const { mark: mark1, id: id1 } = players.find((player) => player.mark === 'X');
  const { mark: mark2, id: id2 } = players.find((player) => player.mark === 'O');

  return (
    <section className="h-5/6 mt-5 mb-auto w-11/12 flex flex-col justify-between md:justify-center md:w-9/12 md:m-auto md:gap-8 lg:h-5/6 lg:w-5/12 2xl:w-4/12 landmobileSS:landscape-game">
      <GameHeader />
      <GameBoard />
      <article className="w-full grid grid-cols-3 gap-2 place-items-center landmobileSS:landscape-score-cont">
        <ScoreCard title={`${mark1} (${id1})`} score={winsX} type="X" />
        <ScoreCard title="Ties" score={ties} type="Ties" />
        <ScoreCard title={`${mark2} (${id2})`} score={winsO} type="O" />
      </article>
    </section>
  );
};

export default Game;
