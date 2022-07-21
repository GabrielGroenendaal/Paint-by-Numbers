import React from 'react';
import Board from '../../game_logic/board'
import LibraryItemTile from './library_item_tile';
import Util from '../../game_logic/util'
import { withRouter } from 'react-router';


class LibrarySavedItem extends React.Component {
      constructor(props) {
            super(props)
            // console.log(props.savedPuzzle)
            let progress = (this.props.savedPuzzle.progress) ? {
                  freshProgress: this.props.savedPuzzle.progress
            } : null
            let options = {
                  freshTiles: this.props.savedPuzzle.tileData,
                  dimensions: this.props.savedPuzzle.size
            }
            // console.log(progress)
            let newBoard = new Board(options);
            newBoard.updateBoard(Util.parseProgressFromString(this.props.savedPuzzle.progress))
            
            this.state = {
                  board: newBoard
            }
      }


      onClick(event) {
            event.preventDefault();
            if (event.altKey) {
                  this.props.deleteProgress(this.props.savedPuzzle.id)
                  this.setState({
                        board: null
                  })
            } else {
                  this.props.history.push(`/${this.props.savedPuzzle.id}`)
                  this.props.closeModal()
            }
      }

      render() {
            if (!this.props.savedPuzzle || !this.state.board) {
                  return null
            }
            return (
                  <div className="cover-puzzle">
                        <table className="library-board-container" onClick={this.onClick.bind(this)}>
                              <tbody>
                                    {this.state.board.tiles.map(
                                          (ele, idx) => {
                                                return (
                                                      <tr className="library-board-row" key={idx.toString()}>
                                                            {this.state.board.tiles[idx].map(
                                                                  (innerEle, innerIdx) => {
                                                                        return (
                                                                              <LibraryItemTile
                                                                                    tile={innerEle}
                                                                                    key={idx.toString() + innerIdx.toString()}
                                                                                    board={this.state.board}
                                                                                    type={this.props.type}
                                                                              />
                                                                        )
                                                                  }
                                                            )}
                                                      </tr>
                                                )
                                          }
                                    )}
                              </tbody>

                        </table>
                  </div>
            )
      }
}

export default withRouter(LibrarySavedItem)