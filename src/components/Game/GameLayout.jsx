import { Component } from "react";
import { Infromation } from "../Information/Information";
import { Field } from "../Field/Field";
import { ResetGameButton } from "../ResetGameButton/ResetGameButton";

export class GameLayout extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw, field, winInd } = this.props;
    return (
      <div className="flex flex-col items-center gap-8 w-screen">
        <Infromation currentPlayer={currentPlayer} isDraw={isDraw} isGameEnded={isGameEnded} />
        <Field field={field} isGameEnded={isGameEnded} winInd={winInd} />
        {isGameEnded || isDraw ? <ResetGameButton /> : null}
      </div>
    );
  }
}
