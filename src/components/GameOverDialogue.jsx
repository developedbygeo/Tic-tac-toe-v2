/** @jsxImportSource @emotion/react */

import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { restart, quit } from '../features/game/gameSlice';

import CustomButton from './UI/Buttons';
import { svgLookup, winnerColorLookup } from '../utils/constants';

const winningTextColor = (winner) => css`
  color: ${winnerColorLookup[winner]};
`;

const svgStyle = css`
  & > svg {
    transform: scale(0.8);
  }
`;

const GameOverDialogue = ({ onDisable }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode, players, winner, finalState } = useSelector((state) => state.game);

  const quitHandler = () => {
    onDisable();
    dispatch(quit());
    navigate('/');
  };

  const nextRoundHandler = () => {
    dispatch(restart());
    onDisable();
  };

  const playerVersusCpuText = players[0].mark === winner ? 'YOU WON' : 'OH NO, YOU LOST...';

  const playerVersusPlayerText = players[0].mark === winner ? 'PLAYER 1 WINS' : 'PLAYER 2 WINS';

  const winText = winner && `TAKES THE ROUND`;
  const tieText = finalState && !winner && 'ROUND TIED';

  return (
    <article className="h-full w-full p-2 flex flex-col items-center justify-evenly ">
      {winner && (
        <h1 className="text-custom-silver text-xl tracking-wider font-bold">
          {mode === 'CPU' ? playerVersusCpuText : playerVersusPlayerText}
        </h1>
      )}
      <div className="flex flex-row items-center justify-center" css={svgStyle}>
        {winner && svgLookup[winner]}
        <h2 className="text-2xl font-bold tracking-wider px-4" css={winningTextColor(winner)}>
          {winText || tieText}
        </h2>
      </div>
      <div className="flex flex-row gap-3">
        <CustomButton
          onClick={quitHandler}
          title="Quit the game"
          className="text-center py-2"
          type="basic"
          size="lg"
        >
          QUIT
        </CustomButton>
        <CustomButton
          onClick={nextRoundHandler}
          title="Play the next round"
          className="py-2"
          type="primary"
          size="lg"
        >
          NEXT ROUND
        </CustomButton>
      </div>
    </article>
  );
};

GameOverDialogue.propTypes = {
  onDisable: PropTypes.func.isRequired
};

export default GameOverDialogue;
