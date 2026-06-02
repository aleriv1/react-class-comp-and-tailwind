import { Component } from "react";

export class ResetGameButtonLayout extends Component {
  render() {
    const { handleResetGame } = this.props;
    return <button onClick={handleResetGame}>Начать заново</button>;
  }
}
