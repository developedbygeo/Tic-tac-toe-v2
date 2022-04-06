/* eslint-disable react/no-array-index-key */

/** @jsxImportSource @emotion/react */

import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { useEffect } from 'react';

import { play } from '../features/game/gameSlice';
import { TicButton } from './UI/Buttons';

import outlineX from '../assets/icon-x-outline.svg';
import outlineO from '../assets/icon-o-outline.svg';
import { ReactComponent as MarkX } from '../assets/icon-x.svg';
import { ReactComponent as MarkO } from '../assets/icon-o.svg';

import { averageCpu } from '../utils/utilFns';

const style = (svg, condition) => css`
  ${condition === true &&
  `
    &:hover{
    background-image: url(${svg});
  }
  `}
`;

const lookup = {
  X: <MarkX />,
  O: <MarkO />,
  '': ''
};

// TODO clean up and add a conditional hover helper fn

const GameBoard = () => {
  const dispatch = useDispatch();
  const { board, currentTurn, mode, players, currentRoundWinner } = useSelector(
    (state) => state.game
  );
  const hoverMark = currentTurn === 'X' ? outlineX : outlineO;

  const playerMoveHandler = (index) => {
    if (mode === 'CPU' && currentTurn === players[0].mark) {
      const { mark } = players[0];
      dispatch(play({ position: index, mark }));
    }
    if (mode !== 'CPU') {
      dispatch(play({ position: index, mark: currentTurn }));
    }
  };

  useEffect(() => {
    if (mode === 'CPU' && currentTurn !== players[0].mark && !currentRoundWinner) {
      const selection = averageCpu(board, players[1].mark);
      const timer = setTimeout(() => {
        dispatch(play({ position: selection, mark: players[1].mark }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [mode, players, currentTurn, board, currentRoundWinner, dispatch]);

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
            {lookup[card]}
          </TicButton>
        );
      })}
    </div>
  );
};

export default GameBoard;
