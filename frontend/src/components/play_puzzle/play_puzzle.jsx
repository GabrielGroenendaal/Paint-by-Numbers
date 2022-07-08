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
            // let newBoard = null;
           
      
            //       newBoard = new Board({
            //             dimensions: puzzle.size,
            //             originalImageUrl: puzzle.original_img_url,
            //             tiles: Util.parseTileDataFromString(puzzle.tile_data)
            //       })
            // })
            // if (newBoard) {
            //       this.setState({
            //             board: newBoard
            //       })
            // }
      }

      render() {
            // let status = "Good Luck"
            // if (this.state.board.complete) {
            //       status = "You finished!"
            //       console.log(Util.convertBoardToString(this.state.board))
            // }

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
                              <PuzzleSubmit generate={this.generatePuzzle.bind(this)} swap={this.props.swap} />
                              <SeedOption updatePuzzle={this.updatePuzzle} />
                              <PuzzleLibraryContainer />
                        </div>

                  </div>
            )
      }
}

export default PlayPuzzle;