import { MAKE_MOVE, RESET_GAME } from './actionTypes';

export const makeMove = (index) => ({
  type: MAKE_MOVE,
  payload: index,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
