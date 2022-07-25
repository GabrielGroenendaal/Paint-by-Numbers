import React from 'react';
import Board from '../game_logic/board'
import Util from '../game_logic/util'
import BoardComponent from './board'
import PuzzleOptions from './puzzle_options/puzzle_options';
import PuzzleSubmit from './puzzle_options/puzzle_submit';
import PuzzleLibraryContainer from './puzzle_options/puzzle_library_container';
import ProgressBoard from './puzzle_options/progress_board';
import SeedOption from './puzzle_options/seed_option';
class PlayPuzzle extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new Board({ dimensions: "10x10" }),
                  board_size: "10x10",
                  progress: null,
                  url:  "https://media.istockphoto.com/vectors/party-popper-with-confetti-vector-id1125716911?k=20&m=1125716911&s=612x612&w=0&h=1jfthodW7JsOR8vz3A_e2HJbrAAjPJhogviXeOwaz5c="
            }

            this.updateGame = this.updateGame.bind(this)
            this.updatePuzzle = this.updatePuzzle.bind(this)
            // this.revealAllTiles = this.revealAllTiles.bind(this)
      }

      componentDidMount() {
            this.props.openModal({ modal: 'manual'})
      }

   


      updateGame(tile, isFlagging) {
            (isFlagging) ? tile.toggleFlag() : tile.explore();
            if (this.state.board.complete) {
                  this.props.openModal({
                        modal: 'reveal',
                        url: this.state.url
                  })
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
                  }), 
            })
      }

      generatePuzzle() {
            let options = {
                  dimensions: this.state.dimensions,
            }
            this.setState(prevState => ({
                  board: new Board(options),
                  progress: null,
                  url:  "https://media.istockphoto.com/vectors/party-popper-with-confetti-vector-id1125716911?k=20&m=1125716911&s=612x612&w=0&h=1jfthodW7JsOR8vz3A_e2HJbrAAjPJhogviXeOwaz5c="
            }))
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
                        if (this.props.currentUser.id) {
                              this.props.fetchProgressForPuzzle(this.props.currentUser.id, new_puzzle._id)
                                    .then((response) => {
                                          if (response.progress.data[0]) {
                                                let puzzleProgress = response.progress.data[0]
                                                new_board.updateBoard(Util.parseProgressFromString(puzzleProgress.progress_data))
                                                this.setState({
                                                      board: new_board,
                                                      progress: response.progress.data,
                                                      url: new_puzzle.original_img_url
                                                })
                                          } else {
                                                this.setState({
                                                      board: new_board,
                                                      progress: null,
                                                      url: new_puzzle.original_img_url
                                                })

                                          }
                  

                                    })
                        } else {
                              this.setState({
                                    board: new_board,
                                    progress: null,
                                    url: new_puzzle.original_img_url
                              })

                        }
            }).catch(err => err.responseJSON)
      }

      reveal() {
            let imgurl = (this.state.board.originalImageUrl) ? this.state.board.originalImageURL : "https://media.istockphoto.com/vectors/party-popper-with-confetti-vector-id1125716911?k=20&m=1125716911&s=612x612&w=0&h=1jfthodW7JsOR8vz3A_e2HJbrAAjPJhogviXeOwaz5c="

            this.props.openModal({
                  modal: 'reveal',
                  url: this.state.url
            })      }

      revealAllTiles() {
            let new_board = this.state.board;
            new_board.revealAll();

            this.props.openModal({
                  modal: 'reveal',
                  url: this.state.url
            })
            this.setState({
                  board: new_board,
            })
      }

      selectPuzzleByTheme(theme) {
            let checkTheme = ''
            switch (theme) {
                  case 'ANIMALS':
                        checkTheme = 'Animals'
                        break
                  case 'ARTWORKS':
                        checkTheme = 'Artwork'
                        break
                  case 'LANDSCAPES':
                        checkTheme = 'Landscape'
                        break;
                  case 'POP CULTURE':
                        checkTheme = 'Pop Culture';
                        break;
                  default:
                        checkTheme = 'default'
            }
            this.props.fetchThemedPuzzles(checkTheme)
                  .then((response) => {
                        let themed_puzzles = response.puzzles.data;
                        let themed_puzzle = themed_puzzles[Math.floor(Math.random() * themed_puzzles.length)]
                        // console.log(themed_puzzle)
                        let new_board = new Board({
                              dimensions: themed_puzzle.size, 
                              tiles: Util.parseTileDataFromString(themed_puzzle.tile_data),
                              originalImageUrl: themed_puzzle.original_img_url,
                              id: themed_puzzle._id
                        })
                        this.setState({
                              board: new_board,
                              url: themed_puzzle.original_img_url,
                              progress: null
                        })
                  }).catch(err => err.responseJSON)
      }

      saveProgress() {
            if (this.state.board.complete) {
                  return null
            }
            let new_progress = {
                  progress_data: Util.convertProgressToString(this.state.board),
                  puzzle_id: this.state.board.id,
                  user_id: this.props.currentUser.id
            }

            if (this.state.board.id === 'empty') {
                  // let creator = this.props.currentUser.id 
                  let puzzle_datum = {
                        title: 'Title',
                        difficulty: this.state.board.difficulty || "easy",
                        size: Util.convertDimensionsToString(this.state.board.dimensions),
                        tile_data: Util.convertBoardToString(this.state.board),
                        original_img_url: (this.state.board.originalImageURL || 'https://media.istockphoto.com/vectors/party-popper-with-confetti-vector-id1125716911?k=20&m=1125716911&s=612x612&w=0&h=1jfthodW7JsOR8vz3A_e2HJbrAAjPJhogviXeOwaz5c='),
                        genre: 'default',
                        creator_id: '62d820f04df718fe322babb3'
                  }
                  this.props.processPuzzle(puzzle_datum).then((response) => {
                        new_progress.puzzle_id = response.puzzle.data._id
                        // console.log(response)
                        this.props.createNewProgress(new_progress).then((response) => {
                              let new_progress = response.progress.data;
                              let new_board = this.state.board;
                              new_board.id = new_progress.puzzle_id;
                              this.setState({ progress: new_progress})
                        })
                  })
            } else {
                  if (this.state.progress) {    
                        // console.log(this.state.progress)
                        // console.log(this.state.progress._id)
                        this.props.updateProgress(this.state.progress[0]._id, new_progress).then((response) => {
                              let new_progress_data = this.state.progress;
                              // console.log(new_progress_data)
                              this.setState({progress: new_progress_data})
                        })
                  } else {
                        this.props.createNewProgress(new_progress).then((response) => {
                              let new_progress = response.progress.data;
                              this.setState({ progress: new_progress})
                        })
                  }
            }      
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
                        {/* <div className="theme-drop-menu">
                              <div className="theme">
                                    <button className="theme-label">THEME</button>
                                    <ul>
                                          <li><a href="#">ANIMALS</a></li>
                                          <li><a href="#">ARTWORKS</a></li>
                                          <li><a href="#">LANDSCAPES</a></li>
                                          <li><a href="#">POP CULTURE</a></li>
                                    </ul>
                              </div>
                        </div> */}
                              <PuzzleOptions
                                    changePuzzle={this.changePuzzleOptions.bind(this)}
                                    selectTheme={this.selectPuzzleByTheme.bind(this)}
                                    openModal={this.props.openModal} />
                              <div className="middle-option-container">
                                    <ProgressBoard
                                          board={this.state.board}
                                          reset={this.reset.bind(this)}
                                          revealAll={this.revealAllTiles.bind(this)}
                                    />
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
                                    saveProgress={this.saveProgress.bind(this)}
                                    updatePuzzle={this.updatePuzzle} />
                              <SeedOption updatePuzzle={this.updatePuzzle.bind(this)} />
                        </div>

                  </div>
            )
      }
}

export default PlayPuzzle;