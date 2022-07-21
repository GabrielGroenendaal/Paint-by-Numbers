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
                  board_size: "10x10",
                  progress: null
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
                        if (this.props.currentUser.id) {
                              this.props.fetchProgressForPuzzle(this.props.currentUser.id, new_puzzle._id)
                                    .then((response) => {
                                          if (response.progress.data[0]) {
                                                let puzzleProgress = response.progress.data[0]
                                                new_board.updateBoard(Util.parseProgressFromString(puzzleProgress.progress_data))
                                                this.setState({ board: new_board })
                                          } else {
                                                this.setState({ board: new_board })

                                          }
                  

                                    })
                              // this.props.fetchUserProgresses(this.props.currentUser.id)
                              //       .then((response) => {
                              //             let progress = response.progresses.data;
                              //             console.log(progress)
                              //             progress = progress.filter(el => el.puzzle_id = new_puzzle.id)
                              //             console.log(progress)
                              //             //new_board.updateBoard(progress.progressData);
                              //       })
                              //       .catch(err => err.responseJSON)
                        } else {
                              this.setState({ board: new_board })

                        }
            }).catch(err => err.responseJSON)
      }

      reveal() {
            this.props.openModal('reveal')
      }

      revealAllTiles() {
            let new_board = this.state.board;
            new_board.revealAll();
            this.props.openModal('reveal')

            this.setState({
                  board: new_board,
                  progress: null
            })
      }

      selectPuzzleByTheme(theme) {
            theme = 'default'
            this.props.fetchThemedPuzzles(theme)
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
                        this.setState({ board: new_board })
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
                        console.log(response)
                        this.props.createNewProgress(new_progress).then((response) => {
                              let new_progress = response.progress.data;
                              let new_board = this.state.board;
                              new_board.id = new_progress.puzzle_id;
                              this.setState({ progress: new_progress})
                        })
                  })
            } else {
                  if (this.state.progress) {    
                        this.props.updateProgress(this.state.progress._id, new_progress).then((response) => {
                              let new_progress_data = this.state.progress;
                              new_progress_data.progress_data = new_progress.progress_data;
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
                              <PuzzleOptions
                                    changePuzzle={this.changePuzzleOptions.bind(this)}
                                    selectTheme={this.selectPuzzleByTheme.bind(this)}
                                    openModal={this.props.openModal} />
                              <div className="middle-option-container">
                                    <ProgressBoard
                                          board={this.state.board}
                                          reset={this.reset.bind(this)}
                                          revealAll={this.revealAllTiles}
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
                              
                        </div>

                  </div>
            )
      }
}

export default PlayPuzzle;