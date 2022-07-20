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
      
      onClick(event) {
            event.preventDefault();
            if (this.props.type === 'made') {
                  let text = `www.paint-by-number.herokuapp.com/#/${this.props.puzzle.id}`
                  navigator.clipboard.writeText(text)
                  alert("Copied the url: " + text);
            }
      }
      
      render() {
            let text = (this.props.type === 'made') ? 'SHARE' : 'OPEN';
            return (
                  <div className="cover-puzzle">
                        <table className="library-board-container" onClick={this.onClick.bind(this)}>
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