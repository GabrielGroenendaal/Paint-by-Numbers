import React from "react";
import Board from "../../game_logic/board";
import LibraryItemTile from "./library_item_tile";
import Util from "../../game_logic/util";

class LibraryItem extends React.Component {
      constructor(props) {
            super(props)

            let options = {
                  tiles: Util.parseTileDataFromString(this.props.puzzle.tileData),
                  dimensions: this.props.puzzle.size,
                  id: this.props.puzzle.id,
            }

            this.state = {
                  board: new Board(options)
            }
      }

      onClick(event) {
            event.preventDefault()
            if (event.altKey) {
                  this.props.deletePuzzle(this.props.puzzle.id)
                  this.setState({ board: null })
            } else {
                  let text = `paint-by-number.herokuapp.com/${this.props.puzzle.id}`
                  navigator.clipboard.writeText(text).then(() => {
                        alert(`URL copied to dashboard!: ${text}`)

                  }, () => {
                        alert(`Unsuccessful copy`)
                  })
            }
      }
      render() {
            if (!this.props.puzzle || !this.state.board) {
                  return null
            }
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
                                                                        type={this.props.type}
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