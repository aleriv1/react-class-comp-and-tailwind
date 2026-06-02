import { Component } from "react";
import { InfromationLayout } from "./InformationLayout";

export class Infromation extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    return (
      <InfromationLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
    );
  }
}
