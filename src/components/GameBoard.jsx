/* eslint-disable react/no-array-index-key */
/** @jsxImportSource @emotion/react */

import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import useMinmax from '../hooks/useMinmax';
import usePlayer from '../hooks/usePlayer';

import { TicButton } from './UI/Buttons';

import { svgLookup } from '../utils/constants';

const style = (svg, condition) => css`
  ${condition === true &&
  `
    transition: 50ms ease;
    &:hover{
    background-image: url(${svg});
  }
  `}
`;

const GameBoard = () => {
  const { board, mode } = useSelector((state) => state.game);
  const hoverMarkCPU = useMinmax();
  const [playerMoveHandler, currentHover] = usePlayer();
  const hoverMark = mode === 'CPU' ? hoverMarkCPU : currentHover;

  return (
    <div className="h-3/5 grid grid-cols-3 grid-rows-3 place-items-center gap-6">
      {board.map((card, index) => {
        return (
          <TicButton
            key={index}
            onMove={() => playerMoveHandler(index)}
            className="w-full h-full cursor-pointer bg-contain bg-no-repeat bg-center flex items-center justify-center"
            css={style(hoverMark, !card)}
          >
            {svgLookup[card]}
          </TicButton>
        );
      })}
    </div>
  );
};

export default GameBoard;
