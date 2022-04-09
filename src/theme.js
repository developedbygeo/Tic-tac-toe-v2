import { css } from '@emotion/react';
import { winnerColorLookup } from './utils/constants';

export const ButtonType = {
  primary:
    'btn bg-light-yellow shadow-primaryButtonOne hover:bg-light-yellow-hover active:shadow-primaryButtonOneActive',
  secondary:
    'btn bg-light-blue shadow-primaryButtonTwo hover:bg-light-blue-hover active:shadow-primaryButtonTwoActive',
  basic:
    'btn bg-custom-silver shadow-secondaryButton hover:bg-custom-silver-hover active:shadow-secondaryButtonActive'
};

export const ScoreCardType = {
  X: 'bg-light-blue',
  Ties: 'bg-custom-silver',
  O: 'bg-light-yellow'
};

export const ButtonSize = {
  md: 'py-3 px-4 text-base 2xl:text-sm landmobileSS:text-base landmobileSS:py-2 landMobileSS:px-2',
  lg: 'py-3 px-6 text-base 2xl:text-sm landmobileSS:text-base landmobileSS:py-2 landMobileSS:px-2',
  xl: 'px-8,  py-32'
};

export const ModalStyling = {
  backdrop: 'fixed top-0 left-0 right-0 w-full h-full bg-black/50 z-20',
  overlay:
    'fixed top-1/2 left-1/2 w-full h-2/5 -translate-x-1/2 -translate-y-1/2 z-30 bg-semi-dark-navy md:h-1/3 xl:h-2/5 landmobileSS:h-2/3'
};

export const TicTacToeButtonStyling = (svg, isMarkPlaced, hasPlayerWon, winner) => css`
  ${isMarkPlaced === true &&
  `
    transition: 50ms ease;
    &:hover{
    background-image: url(${svg});
  }
  `}
  ${hasPlayerWon === true &&
  `
  background-color: ${winnerColorLookup[winner]};
  svg{

  }
  `}
`;
