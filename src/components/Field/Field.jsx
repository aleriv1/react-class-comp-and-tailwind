import { connect } from "react-redux";
import { FieldLayout } from "./FieldLayout";
import { makeMove } from "../../store/actions";
import { Component } from "react";

class FieldComponent extends Component {
  handleGameClick = (ind) => {
    this.props.makeMove(ind);
  };

  render() {
    const { field, isGameEnded, winInd } = this.props;
    return (
      <FieldLayout
        field={field}
        handleGameClick={this.handleGameClick}
        isGameEnded={isGameEnded}
        winInd={winInd}
      />
    );
  }
}

const mapDispatchToProps = {
  makeMove,
};

export const Field = connect(null, mapDispatchToProps)(FieldComponent);
