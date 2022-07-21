import React from "react";
import Board from '../../game_logic/board'
import LibraryItemTile from './library_item_tile'
import Util from "../../game_logic/util";
import { withRouter } from "react-router";

class LibraryItem extends React.Component {
      constructor(props) {
            super(props)

            let progress = (this.props.type === "saved") ? Util.parseProgressFromString(this.props.puzzle.progressData) : null

            let options = {
                  tiles: Util.parseTileDataFromString(this.props.puzzle.tileData),
                  dimensions: this.props.puzzle.size,
            }
            let newBoard = new Board(options);
            if (this.props.type === "saved") {
                  newBoard.updateBoard(progress)
            } else {
                  newBoard.revealAll()
            }
            this.state = {
                  board: newBoard
            }
      }
    
      onClick(event) {
            event.preventDefault();
            if (this.props.type === 'made') {
                  if (event.altKey) {
                        this.props.deletePuzzle(this.props.puzzle.id)
                        this.setState({board: null})
                  } else {
                        let text = `paint-by-number.herokuapp.com/#/${this.props.puzzle.id}`
                        navigator.clipboard.writeText(text)
                        alert("Copied the url: " + text);
                  }
            } else {
                  if (event.altKey) {
                        this.props.deleteProgress(this.props.puzzle.id)
                        this.setState({board: null})
                  } else {
                        this.props.history.push(`/${this.props.puzzle.puzzle_id}`)
                        this.props.closeModal();
                  }
            }
      }
      
      
      render() {
            let text = (this.props.type === 'made') ? 'SHARE' : 'OPEN';
            if (!this.state.board) {
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

// export default withRouter(LibraryItem);