import React from "react";
import BoardCreate from "../../../game_logic/board_create";
import CreatePuzzleOptions from "./create_puzzle_options/create_puzzle_options";
import ColorBoard from "./color_puzzle/color_board";
import Util from "../../../game_logic/util";
import ColorPuzzleSubmission from "./create_puzzle_options/color_puzzle_submission";
import ImageOptions from "./images/image_options";
import ColorUtil from '../../../game_logic/color_util'
import PuzzleLibrary from "../play_puzzle/puzzle_options/puzzle_library";
import BombPuzzleSubmission from "./bomb_puzzle/bomb_puzzle_submission";
import BombBoard from "./bomb_puzzle/bomb_board";


class CreatePuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new BoardCreate({ dimensions: "15x15" }),
                  renderImage: null,
                  phase: 1
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
            let checkBoard = Object.assign({}, this.state.board)
            let newTiles = ColorUtil.seedBombsByColor(this.state.board)
            this.setState({
                  board: new BoardCreate({
                        difficulty: checkBoard.difficulty,
                        dimensions: Util.convertDimensionsToString(checkBoard.dimensions),
                        originalImageURL: checkBoard.originalImageURL,
                        tiles: newTiles
                  }),
                  phase: 2
            })
            // this.setState({
            //       board: new BoardCreate({}),
            //       phase: 2
            // })
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
                  }),
            }))
      }


      removeImage() {
            this.setState({
                  renderImage: null
            })
      }

      submitPuzzle() {
            let puzzleData = Util.convertBoardToString(this.state.board)
      }

      render() {
            
            if (this.state.phase === 1) {
                  return (
                        <div className="main">
                              <div className="puzzle-container">
                                    <div className="puzzle-wrap">
                                          <div className="puzzle-content-container">
                                                <ColorBoard update={this.updateBoardSettings} board={this.state.board} />
                                          </div>
                                     </div>
                              <div className="puzzle-options-collapse">
                                    {/* <button className="Hide">
                                          <i className="fa fa-chevron-down" id="fa-chevron-down"></i>
                                          <i className="fa fa-chevron-up" id="fa-chevron-up"></i>
                                    </button> */}
                                    <div className="puzzle-options-container">
                                                <CreatePuzzleOptions updateBoard={this.updateBoardSetting} />
                                                <ColorPuzzleSubmission submitColor={this.submitColor.bind(this)} />
                                                <ImageOptions submitImage={this.submitImage.bind(this)} board={this.state.board} />

                                                <PuzzleLibrary />
                                    {/* SubmitPuzzleButtons */}
                                    {/* LibraryOptions */}
                                          </div>
                                          </div>
                              </div>
                      
                            
      
                        </div>
                  )
            } 
            else if (this.state.phase == 2) {
                  return (
                        <div className="main">
                              <div className="puzzle-container">
                                    <div className="puzzle-wrap">
                                          <div className="puzzle-content-container">
                                                <BombBoard update={this.updateBoardSettings} board={this.state.board} />
                                          </div>
                                          <ImageOptions submitImage={this.submitImage.bind(this)} board={this.state.board} />
                                     </div>
                              <div className="puzzle-options-collapse">
                        
                                    <div className="puzzle-options-container">
                                                <CreatePuzzleOptions active={false} updateBoard={this.updateBoardSetting} />
                                                <BombPuzzleSubmission submitPuzzle={this.submitPuzzle.bind(this)} />
                                          <PuzzleLibrary />
                                    {/* SubmitPuzzleButtons */}
                                    {/* LibraryOptions */}
                                          </div>
                                          </div>
                              </div>
                      
                            
      
                        </div>
                  )
            }

      
      }
}

export default CreatePuzzle;