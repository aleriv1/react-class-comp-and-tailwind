import { Component } from "react";

export class InfromationLayout extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    let message = "";
    if (isDraw) {
      message = "Ничья";
    } else if (!isDraw && isGameEnded) {
      message = `Победа: ${currentPlayer}-ка`;
    } else {
      message = `Ходит: ${currentPlayer}-к`;
    }

    return <h1 className="mb-2.5">{message}</h1>;
  }
}
