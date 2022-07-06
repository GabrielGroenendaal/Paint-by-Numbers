import React from "react";
import BoardCreate from "../../../game_logic/board_create";
import CreatePuzzleOptions from "./create_puzzle_options";
import ColorBoard from "./color_puzzle/color_board";
import Util from "../../../game_logic/util";
class CreatePuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new BoardCreate()
            }
            this.updateBoardSetting = this.updateBoardSetting.bind(this)
      }

      updateBoardSetting(options) {
            if (options.dimensions && options.dimensions != Util.convertDimensionsToString(this.state.board.dimensions)) {
                  this.setState(prevState => ({board: new BoardCreate({dimensions: options.dimensions})}))
            }
            if (options.difficulty && options.difficulty != this.state.board.difficulty) {
                  let checkBoard = Object.assign({}, this.state.board);
                  checkBoard.difficulty = options.difficulty;
                  this.setState(prevState => ({board: checkBoard}))
            }

            if (options.theme && options.theme != this.state.board.theme) {
                  let checkBoard = Object.assign({}, this.state.board);
                  checkBoard.theme = options.theme;
                  this.setState(prevState => ({board: checkBoard}))
            }
      }
      

      render() {
            return (
                  <div className="main">
                        <div className="puzzle-container">
                              <h1 className="title">Paint-by-Numbers</h1>
                              <div className="puzzle-content-container">
                                    <ColorBoard update={this.updateBoardSettings} board={this.state.board} />
                              </div>
                        </div>

                        <CreatePuzzleOptions container={this} /> 
                  </div>
            )
      }
}

export default CreatePuzzle;