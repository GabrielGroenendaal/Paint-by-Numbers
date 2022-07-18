import React from "react";
import HintX from "./hintX";
import TileComponent from "./tile";
import HintComponent from "./hint";


class Board extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  selection: [],
                  selecting: false,
                  currentMouseover: null
            }
            this.addToSelection = this.addToSelection.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this)
            this.onMouseUp = this.onMouseUp.bind(this)
            this.currentMouseOver = this.currentMouseOver.bind(this)
            this.clearSelection = this.clearSelection.bind(this)
      }

      componentDidMount() {
            document.addEventListener('keydown', (event) => {
                  this.clearSelection()
            });
      }
      
      clearSelection() {
            this.setState(prevState => ({ selection: [], selecting: false }))
      }

      addToSelection(tile) {
            this.setState(prevState => ({ selection: [...prevState.selection, tile] }))
      }

      onMouseDown(event) {
            event.preventDefault()
            this.setState(prevState => ({ selecting: true }))
      }

      onMouseUp(event) {
            event.preventDefault()
            this.state.selection.forEach(checkTile => {
                  this.props.update(checkTile, event.altKey ? true : false)
            })
            this.setState(prevState => ({ selection: [], selecting: false }))
      }


      currentMouseOver(tile) {
            this.setState(prevState => ({ currentMouseover: tile }))
      }

      render() {

            if (!this.props.board === null) {
                  return null
            }

            this.props.board.updateHintsX();
            this.props.board.updateHintsY();
            let hintsX = this.props.board.hintsX;
            let hintsY = this.props.board.hintsY;


            return (
                  <table
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseUp={this.onMouseUp.bind(this)}

                        className="board-container">
                        <tbody>
                              <HintX hints={hintsX} boardObject={this.props.board} />
                              {this.props.board.tiles.map((ele, idx) => {
                                    let className = 'board-row board-row-' + idx.toString()
                                    return (
                                          <tr className={className} key={idx.toString()}>

                                                <HintComponent hint={hintsY[idx]} boardObject={this.props.board} />
                                                {this.props.board.tiles[idx].map((innerEle, innerIdx) => {
                                                      return <TileComponent
                                                            key={idx.toString() + innerIdx.toString()}
                                                            update={this.props.update}
                                                            tile={innerEle}
                                                            addToSelection={this.addToSelection}
                                                            currentMouseOver={this.currentMouseOver}
                                                            board={this}
                                                            boardObject={this.props.board}
                                                      />
                                                })}

                                          </tr>
                                    )
                              })}
                        </tbody>
                  </table>
            )
      }
}

export default Board;


