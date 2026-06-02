import { Component } from "react";

export class FieldLayout extends Component {
  render() {
    const { field, handleGameClick, isGameEnded, winInd } = this.props;
    return (
      <div className="w-[450px] grid grid-cols-3">
        {field.map((item, ind) => {
          const isWinCell = winInd.includes(ind);
          const isNotWin = isGameEnded && !isWinCell;
          let cellClass = "flex justify-center items-center w-[150px] h-[150px] text-5xl cursor-pointer border border-white text-green-500";
          if (isWinCell) {
            cellClass = "flex justify-center items-center w-[150px] h-[150px] text-5xl cursor-pointer border-[5px] border-green-500 text-white";
          } else if (isNotWin) {
            cellClass = "flex justify-center items-center w-[150px] h-[150px] text-5xl cursor-pointer border-0 text-gray-500";
          }
          return (
            <div
              key={ind}
              className={cellClass}
              onClick={() => {
                if (isGameEnded || field[ind]) return;
                handleGameClick(ind);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}
