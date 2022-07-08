import React from 'react';
import Board from '../game_logic/board'
import Tile from '../game_logic/tile'
import Util from '../game_logic/util'
import BoardComponent from './board'
import PuzzleOptions from './puzzle_options/puzzle_options';
import PuzzleSubmit from './puzzle_options/puzzle_submit';
import PuzzleLibraryContainer from './puzzle_options/puzzle_library_container';
import SeedOption from './puzzle_options/seed_option';
import { fetchPuzzle } from '../../actions/puzzle_actions';
import ProgressBoard from './puzzle_options/progress_board';


class PlayPuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new Board({ dimensions: "10x10" }),
                  status: 'Good Luck',
                  board_size: "10x10",
                  board_difficulty: "Easy"
            }

            this.updateGame = this.updateGame.bind(this)
            this.updatePuzzle = this.updatePuzzle.bind(this)
            this.revealAllTiles = this.revealAllTiles.bind(this)
      }

      updateGame(tile, isFlagging) {
            (isFlagging) ? tile.toggleFlag() : tile.explore();
            if (this.state.board.checkComplete()) {
                  this.state.status = "You finished!"
            }
            this.setState({ board: this.state.board })
      }

      reset() {
            let data = Util.convertBoardToString(this.state.board.tiles);
            this.setState({
                  board: new Board({ tiles: data })
            })
      }

      generatePuzzle() {
            let options = {
                  dimensions: this.state.dimensions,
                  difficulty: this.state.difficulty
            }
            this.setState(prevState => ({ board: new Board(options) }))
      }

      changePuzzleOptions(options) {
            if (options.dimensions && options.dimensions != this.state.dimensions) {
                  this.setState(prevState => ({ dimensions: options.dimensions }))
            }
            if (options.difficulty && options.difficulty != this.state.difficulty) {
                  this.setState(prevState => ({ difficulty: options.difficulty }))
            }
      }

      updatePuzzle(seed) {
            let new_board = {}
            this.props.fetchPuzzle(seed).then(response => {
                  let new_puzzle = response.puzzle.data;
                  
                        new_board = new Board({
                              difficulty: new_puzzle.difficulty,
                              dimensions: new_puzzle.size,
                              tiles: Util.parseTileDataFromString(new_puzzle.tile_data),
                              originalImageUrl: new_puzzle.original_img_url,
                              id: new_puzzle._id
                        })
                  this.setState({board: new_board})
                  
            }).catch(err => err.responseJSON)
      }

      reveal() {
            this.props.openModal('reveal')
            // this.setState({
            //       board: new Board({ dimensions: "10x10" })
            // })
      }

      revealAllTiles() {
            this.state.board.revealAll()
            this.setState({
                  board: this.state.board
            })
      }

      render() {
            if (!this.state.board) {
                  return null
            } 
            if (this.state.board.complete) {
                  this.reveal()
            }
            return (
                  <div className="main">
                        <div className="puzzle-container">
                              <div className="puzzle-wrap">
                                    <div className="puzzle-content-container">
                                          <BoardComponent update={this.updateGame} board={this.state.board} />
                                    </div>
                              </div>

                        </div>
                        <div className="puzzle-options-container">
                              <PuzzleOptions changePuzzle={this.changePuzzleOptions.bind(this)} />
                              <div className="middle-option-container">
                                    <ProgressBoard board={this.state.board} />
                                    {/* <SeedOption updatePuzzle={this.updatePuzzle} />  */}
                                    <PuzzleSubmit generate={this.generatePuzzle.bind(this)} swap={this.props.swap} />
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