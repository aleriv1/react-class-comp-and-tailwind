import { connect } from "react-redux";
import { ResetGameButtonLayout } from "./ResetGameButtonLayout";
import { resetGame } from "../../store/actions";
import { Component } from "react";

class ResetGameButtonComponent extends Component {
  handleResetGame = () => {
    this.props.resetGame();
  };

  render() {
    return <ResetGameButtonLayout handleResetGame={this.handleResetGame} />;
  }
}

const mapDispatchToProps = {
  resetGame,
};

export const ResetGameButton = connect(null, mapDispatchToProps)(ResetGameButtonComponent);
