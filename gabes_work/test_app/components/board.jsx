import React from "react";
import Tile from "../../game_logic/tile";
import HintX from "./hintX";
import TileComponent from "./tile";
import HintComponent from "./hint";
class Board extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  
            }
      }

      // updateCrossouts() {
      //       let hintsY = this.props.generateHintsY();
      //       let hintsX = this.props.generateHintsX();
      // }

      render() {
            this.props.board.updateHintsX();
            this.props.board.updateHintsY();
            let hintsX = this.props.board.hintsX;
            let hintsY = this.props.board.hintsY;
           
            
            return (
                  <div className="board-container">
                        <HintX hints={hintsX} />
                        {this.props.board.tiles.map((ele, idx) => {
                              let className = 'board-row-' + idx.toString()
                              return (
                                    <div className={className} key={idx.toString()}>
                                          <HintComponent hint={hintsY[idx]} />
                                          {this.props.board.tiles[idx].map((innerEle, innerIdx) => {
                                                return <TileComponent key={idx.toString() + innerIdx.toString()} update={this.props.update} tile={innerEle} />
                                          })}
                                    </div>
                              )
                        })}
                  </div>
            )
      }
}

export default Board;