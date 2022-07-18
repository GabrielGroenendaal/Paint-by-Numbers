import React from "react";
import Board from '../game_logic/board'
import LibraryItemTile from './library_item_tile'
import Util from "../game_logic/util";
class LibraryItem extends React.Component {
      constructor(props) {
            super(props)

            let progress = (this.props.type === "saved") ? Util.parseProgressFromString(this.props.puzzle.progressData) : null
            let newBoard = new Board({
                  tiles: Util.parseTileDataFromString(this.props.puzzle.tileData),
                  dimensions: this.props.puzzle.size
            }, { tiles: progress });
            if (this.props.type === "made") {
                  newBoard.revealAll()
            }

            this.state = {
                  board: newBoard
            }
      }

      
      render() {
            return (
                  <div className="cover-puzzle">
                        <table className="library-board-container">
                              <tbody>
                                    {this.state.board.tiles.map((ele, idx) => {
                                          return (
                                                <tr className="library-board-row" key={idx.toString()}>
                                                      {this.state.board.tiles[idx].map((innerEle, innerIdx) => {
                                                            return (
                                                                  <LibraryItemTile
                                                                        tile={innerEle}
                                                                        key={idx.toString() + innerIdx.toString()}
                                                                        board={this.state.board}
                                                                  />
                                                            )
                                                      })}
                                                </tr>
                                          )
                                    })}
                              </tbody>
                        </table>
                  </div>
            )
      }
}

export default LibraryItem;