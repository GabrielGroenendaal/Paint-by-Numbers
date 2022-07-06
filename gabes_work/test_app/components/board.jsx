import React from "react";
import Tile from "../../game_logic/tile";
import HintX from "./hintX";
import TileComponent from "./tile";
import HintComponent from "./hint";


class Board extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  selection: [],
                  selecting: false
            }
            this.addToSelection = this.addToSelection.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this)
            this.onMouseUp = this.onMouseUp.bind(this)
      }

    
      addToSelection(tile) {
            this.setState(prevState => ({ selection: [...prevState.selection, tile]}))
      }

      onMouseDown(event) {
            event.preventDefault()
            this.setState(prevState => ({ selecting: true }))
      }

      onMouseUp(event) {
            event.preventDefault()
            this.state.selection.forEach(checkTile => {
                  this.props.update(checkTile, false)
            })
            this.setState(prevState=> ({ selection: [], selecting: false }))
      }
      render() {
            this.props.board.updateHintsX();
            this.props.board.updateHintsY();
            let hintsX = this.props.board.hintsX;
            let hintsY = this.props.board.hintsY;
           
            
            return (
                  <div
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseUp={this.onMouseUp.bind(this)}
                        className="board-container">
                        <HintX hints={hintsX} />
                        {this.props.board.tiles.map((ele, idx) => {
                              let className = 'board-row-' + idx.toString()
                              return (
                                    <div className={className} key={idx.toString()}>
                                          <HintComponent hint={hintsY[idx]} />
                                          {this.props.board.tiles[idx].map((innerEle, innerIdx) => {
                                                return <TileComponent
                                                      key={idx.toString() + innerIdx.toString()}
                                                      update={this.props.update}
                                                      tile={innerEle}
                                                      addToSelection={this.addToSelection}
                                                      board={this}
                                                />
                                          })}
                                    </div>
                              )
                        })}
                  </div>
            )
      }
}

export default Board;