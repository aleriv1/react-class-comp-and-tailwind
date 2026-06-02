import { connect } from "react-redux";
import { GameLayout } from "./GameLayout";
import { Component } from "react";

class GameComponent extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw, field, winInd } = this.props;
    return (
      <GameLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        field={field}
        winInd={winInd}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
  field: state.field,
  winInd: state.winInd,
});

export const Game = connect(mapStateToProps)(GameComponent);
