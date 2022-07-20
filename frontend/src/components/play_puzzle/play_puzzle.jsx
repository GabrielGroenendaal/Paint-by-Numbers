import React from 'react';
import Board from '../game_logic/board'
import Util from '../game_logic/util'
import BoardComponent from './board'
import PuzzleOptions from './puzzle_options/puzzle_options';
import PuzzleSubmit from './puzzle_options/puzzle_submit';
import PuzzleLibraryContainer from './puzzle_options/puzzle_library_container';
import ProgressBoard from './puzzle_options/progress_board';


class PlayPuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new Board({ dimensions: "10x10" }),
                  board_size: "10x10"
            }

            this.updateGame = this.updateGame.bind(this)
            this.updatePuzzle = this.updatePuzzle.bind(this)
            this.revealAllTiles = this.revealAllTiles.bind(this)
      }

      localStr() {
            const saveProgress = Util.convertProgressToString(this.state.board);
            localStorage.setItem()
      }


      updateGame(tile, isFlagging) {
            (isFlagging) ? tile.toggleFlag() : tile.explore();
            if (this.state.board.complete) {
                  this.props.openModal('reveal')
            }
            this.setState({ board: this.state.board })
      }

      reset() {
            let new_puzzle = this.state.board
            let tile_data = Util.parseTileDataFromString(Util.convertBoardToString(new_puzzle))
            this.setState({
                  board: new Board({
                        dimensions: Util.convertDimensionsToString(new_puzzle.dimensions),
                        tiles: tile_data,
                        originalImageUrl: new_puzzle.original_img_url,
                        id: new_puzzle._id
                  })
            })
      }

      generatePuzzle() {
            let options = {
                  dimensions: this.state.dimensions,
            }
            this.setState(prevState => ({ board: new Board(options) }))
      }

      changePuzzleOptions(options) {
            if (options.dimensions && options.dimensions !== this.state.dimensions) {
                  this.setState(prevState => ({ dimensions: options.dimensions }))
            }
      }

      updatePuzzle(seed) {
            let new_board = {}
            this.props.fetchPuzzle(seed)
                  .then(response => {
                        let new_puzzle = response.puzzle.data;

                        new_board = new Board({
                              dimensions: new_puzzle.size,
                              tiles: Util.parseTileDataFromString(new_puzzle.tile_data),
                              originalImageUrl: new_puzzle.original_img_url,
                              id: new_puzzle._id
                        })
                        // if (this.props.currentUser) {
                        //       this.props.fetchProgressForPuzzleAndUser(this.props.currentUser.id, new_puzzle._id)
                        //             .then((response) => {
                        //                   let progress = response.progress.data;
                        //                   new_board.updateBoard(progress.progressData);
                        //             })
                        //             .catch(err => err.responseJSON)
                        // }

                        this.setState({ board: new_board })

            }).catch(err => err.responseJSON)
      }

      reveal() {
            this.props.openModal('reveal')
      }

      revealAllTiles() {
            this.state.board.revealAll();
            this.props.openModal('reveal')

            this.setState({
                  board: this.state.board
            })
      }

      selectPuzzleByTheme(theme) {
            this.props.fetchThemedPuzzles('default')
                  .then((response) => {
                        let themed_puzzles = response.puzzles.data;
                        let themed_puzzle = themed_puzzles[Math.floor(Math.random() * themed_puzzles.length)]
                        console.log(themed_puzzle)
                        let new_board = new Board({
                              dimensions: themed_puzzle.size, 
                              tiles: Util.parseTileDataFromString(themed_puzzle.tile_data),
                              originalImageUrl: themed_puzzle.original_img_url,
                              id: themed_puzzle._id
                        })
                        this.setState({ board: new_board })
                  }).catch(err => err.responseJSON)
      }

      render() {
            if (!this.state.board) {
                  return null
            }

            return (
                  <div className="main">
                        <div className="puzzle-container">
                              <div className="puzzle-wrap">
                                    <div className="puzzle-content-container">
                                          <BoardComponent
                                                update={this.updateGame}
                                                board={this.state.board} />
                                    </div>
                              </div>

                        </div>

                        <div className="puzzle-options-container">
                              <PuzzleOptions
                                    changePuzzle={this.changePuzzleOptions.bind(this)}
                                    selectTheme={this.selectPuzzleByTheme.bind(this)}
                                    openModal={this.props.openModal} />
                              <div className="middle-option-container">
                                    <ProgressBoard
                                          board={this.state.board}
                                          reset={this.reset.bind(this)} />
                                    <PuzzleSubmit
                                          generate={this.generatePuzzle.bind(this)}
                                          swap={this.props.swap} />
                              </div>
                              <PuzzleLibraryContainer
                                    active={true}
                                    currentUser={this.props.currentUser}
                                    openModal={this.props.openModal}
                                    revealAll={this.revealAllTiles}
                                    generate={this.generatePuzzle.bind(this)}
                                    updatePuzzle={this.updatePuzzle} />
                        </div>

                  </div>
            )
      }
}

export default PlayPuzzle;