import React from "react";
import BoardCreate from "../../../game_logic/board_create";
import CreatePuzzleOptions from "./create_puzzle_options/create_puzzle_options";
import ColorBoard from "./color_puzzle/color_board";
import Util from "../../../game_logic/util";
import ColorPuzzleSubmission from "./create_puzzle_options/color_puzzle_submission";
import ImageOptions from "./images/image_options";
import ColorUtil from '../../../game_logic/color_util'
class CreatePuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new BoardCreate({ dimensions: "15x15" }),
                  renderImage: null
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
      }
      
      submitColor() {
            
      }

      submitImage(tiles, picURL) {
            if (!tiles) { return null }
            let dims = Util.convertDimensionsToString(this.state.board.dimensions)
            let diff = this.state.board.difficulty
            this.setState(prevState => ({
                  board: new BoardCreate({
                        tiles: tiles,
                        dimensions: dims,
                        difficulty: diff,
                        originalImageURL: picURL
                  })
            }))
      }
      removeImage() {
            this.setState({
                  renderImage: null
            })
      }

      render() {
 

            return (
                  <div className="main">
                        <div className="puzzle-container">
                              <h1 className="title">Paint-by-Numbers</h1>
                              <div className="puzzle-content-container">
                                    <ColorBoard update={this.updateBoardSettings} board={this.state.board} />
                              </div>
                              <ImageOptions submitImage={this.submitImage.bind(this)} board={this.state.board} />
                        </div>

                        <div className="puzzle-options-container">
                              <CreatePuzzleOptions updateBoard={this.updateBoardSetting} />
                              <ColorPuzzleSubmission submitColor={this.submitColor.bind(this)} />
                              {/* SubmitPuzzleButtons */}
                              {/* LibraryOptions */}
                        </div>
                      

                  </div>
            )
      }
}

export default CreatePuzzle;