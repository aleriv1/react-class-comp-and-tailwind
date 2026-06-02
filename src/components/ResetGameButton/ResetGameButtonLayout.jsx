import { Component } from "react";

export class ResetGameButtonLayout extends Component {
  render() {
    const { handleResetGame } = this.props;
    return <button onClick={handleResetGame} className="text-white">Начать заново</button>;
  }
}
