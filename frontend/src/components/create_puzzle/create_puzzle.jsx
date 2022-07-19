import React from "react";
import BoardCreate from "../game_logic/board_create";
import CreatePuzzleOptions from "./create_puzzle_options/create_puzzle_options";
import ColorBoard from "./color_puzzle/color_board";
import Util from "../game_logic/util";
import ColorPuzzleSubmission from "./create_puzzle_options/color_puzzle_submission";
import ImageOptions from "./images/image_options";
import ColorUtil from '../game_logic/color_util'

import BombPuzzleSubmission from "./bomb_puzzle/bomb_puzzle_submission";
import BombBoard from "./bomb_puzzle/bomb_board";
import PuzzleLibraryContainer from "../play_puzzle/puzzle_options/puzzle_library_container";

class CreatePuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new BoardCreate({ dimensions: "15x15" }),
                  renderImage: null,
                  phase: 1,
                  storedPicture: null
            }
            this.updateBoardSetting = this.updateBoardSetting.bind(this)
            this.reset = this.reset.bind(this)
      }

      updateBoardSetting(options) {
            if (options.dimensions && options.dimensions != Util.convertDimensionsToString(this.state.board.dimensions)) {
                  this.setState(prevState => ({board: new BoardCreate({dimensions: options.dimensions})}))
            }
            // if (options.difficulty && options.difficulty != this.state.board.difficulty) {
            //       let checkBoard = Object.assign({}, this.state.board);
            //       // checkBoard.difficulty = options.difficulty;
            //       this.setState(prevState => ({board: checkBoard}))
            // }
      }
      
      submitColor() {
            let checkBoard = Object.assign({}, this.state.board)
            let newTiles = ColorUtil.seedBombsByColor(this.state.board)
            this.setState({
                  board: new BoardCreate({
                        // difficulty: checkBoard.difficulty,
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
      submitImageForCheck(image) {
            this.setState({
                  storedPicture: image
            })
      }
      submitImage(tiles, picURL) {
            if (!tiles) { return null }
            let dims = Util.convertDimensionsToString(this.state.board.dimensions)
            // let diff = this.state.board.difficulty
            this.setState(prevState => ({
                  board: new BoardCreate({
                        tiles: tiles,
                        dimensions: dims,
                        // difficulty: diff,
                        originalImageURL: picURL
                  }),
            }))
      }


      removeImage() {
            this.setState({
                  renderImage: null
            })
      }

      reset() {
            let oldBoard = Util.convertDimensionsToString(this.state.board.dimensions)
            this.setState({
                  board: new BoardCreate({ dimensions: oldBoard }),
                  renderImage: null,
                  phase: 1
            })
      }

      submitPuzzle() {
            let puzzleDatum = {
                  title: 'Title',
                  difficulty: this.state.board.difficulty || "easy",
                  size: Util.convertDimensionsToString(this.state.board.dimensions),
                  tile_data: Util.convertBoardToString(this.state.board),
                  original_img_url: (this.state.board.originalImageURL || 'https://media.istockphoto.com/vectors/party-popper-with-confetti-vector-id1125716911?k=20&m=1125716911&s=612x612&w=0&h=1jfthodW7JsOR8vz3A_e2HJbrAAjPJhogviXeOwaz5c='),
                  //creator_id: (this.props.currentUser.id || 1)
            }
            this.props.processPuzzle(puzzleDatum).then(() => this.props.openModal('seed'))

            //let puzzleData = Util.convertBoardToString(this.state.board)
      }

      render() {
            
            if (this.state.phase === 1) {
                  return (
                        <div className="main">
                              {this.state.storedPicture}
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
                                                <CreatePuzzleOptions active={true} updateBoard={this.updateBoardSetting} />
                                                <div className="middle-option-container">
                                                      <ImageOptions
                                                            submitImageForCheck={this.submitImageForCheck.bind(this)}
                                                            submitImage={this.submitImage.bind(this)}
                                                            board={this.state.board} />
                                                      <ColorPuzzleSubmission submitColor={this.submitColor.bind(this)} swap={this.props.swap} />

                                                </div>
                                             
                                                <PuzzleLibraryContainer />
                                    {/* SubmitPuzzleButtons */}
                                    {/* LibraryOptions */}
                                          </div>
                                          </div>
                              </div>
                      
                            
      
                        </div>
                  )
            } 
            else if (this.state.phase === 2) {
                  return (
                        <div className="main">
                              <div className="puzzle-container">
                                    <div className="puzzle-wrap">
                                          <div className="puzzle-content-container">
                                                <BombBoard update={this.updateBoardSettings} board={this.state.board} />
                                          </div>
                                     </div>
                              <div className="puzzle-options-collapse">
                        
                                    <div className="puzzle-options-container">
                                                <CreatePuzzleOptions active={false} reset={this.reset} updateBoard={this.updateBoardSetting} />
                                                <div className="middle-option-container">
                                                      <ImageOptions submitImage={this.submitImage.bind(this)} board={this.state.board} />
                                                      <BombPuzzleSubmission submitPuzzle={this.submitPuzzle.bind(this)} swap={this.props.swap}/>
                                                </div>
                                                <PuzzleLibraryContainer />
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