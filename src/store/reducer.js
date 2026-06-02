import { MAKE_MOVE, RESET_GAME } from './actionTypes';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const initialState = {
  field: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  currentStartPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  winInd: [],
};

function getWinIndices(field, player) {
  const playerIndices = field
    .map((cell, i) => (cell === player ? i : -1))
    .filter((v) => v !== -1);

  for (const pattern of WIN_PATTERNS) {
    if (pattern.every((idx) => playerIndices.includes(idx))) {
      return pattern;
    }
  }
  return null;
}

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_MOVE: {
      const index = action.payload;

      if (state.isGameEnded || state.isDraw || state.field[index] !== '') {
        return state;
      }

      const newField = [...state.field];
      newField[index] = state.currentPlayer;

      const winIndices = getWinIndices(newField, state.currentPlayer);

      if (winIndices) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          winInd: winIndices,
        };
      }

      if (newField.every((cell) => cell !== '')) {
        return {
          ...state,
          field: newField,
          isDraw: true,
        };
      }

      return {
        ...state,
        field: newField,
        currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
      };
    }

    case RESET_GAME: {
      const nextStartPlayer = state.currentStartPlayer === 'X' ? '0' : 'X';
      return {
        ...initialState,
        currentPlayer: nextStartPlayer,
        currentStartPlayer: nextStartPlayer,
      };
    }

    default:
      return state;
  }
}
