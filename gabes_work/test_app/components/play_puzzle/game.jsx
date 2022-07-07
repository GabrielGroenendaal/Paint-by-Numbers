import React from 'react';
import Board from '../../../game_logic/board'
import Tile from '../../../game_logic/tile'
import Util from '../../../game_logic/util'
import BoardComponent from './board'
import PuzzleOptions from './puzzle_options/puzzle_options';
import PuzzleSubmit from './puzzle_options/puzzle_submit';
import PuzzleLibrary from './puzzle_options/puzzle_library';

class Game extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new Board({ dimensions: "5x5" }),
                  status: 'Good Luck',
                  board_size: "10x10",
                  board_difficulty: "Easy"
            }

            this.updateGame = this.updateGame.bind(this)
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
            this.setState(prevState => ({board: new Board(options)}))
      }

      changePuzzleOptions(options) {
            if (options.dimensions && options.dimensions != this.state.dimensions) {
                  this.setState(prevState => ({dimensions: options.dimensions}))
            }
            if (options.difficulty && options.difficulty != this.state.difficulty) {
                  this.setState(prevState => ({difficulty: options.difficulty}))
            }
            console.log(options)
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
                              <h1 className="title">Paint-by-Numbers</h1>
                              <div className="puzzle-content-container">
                                    <BoardComponent update={this.updateGame} board={this.state.board} />
                              </div>
                              <h2 className="status">{status}</h2>
                        </div>
                        <div className="puzzle-options-container">
                              <PuzzleOptions changePuzzle={this.changePuzzleOptions.bind(this)} />
                              <PuzzleSubmit generate={this.generatePuzzle.bind(this)} />
                              <PuzzleLibrary />
                        </div>
                     
                  </div>
            )
      }
}

export default Game;