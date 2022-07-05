import React from 'react';
import Board from '../../game_logic/board'
import Tile from '../../game_logic/tile'
import Util from '../../game_logic/util'
import BoardComponent from './board'

class Game extends React.Component {
      constructor(props){
            super(props)
            this.state = {
                  board: new Board(),
                  status: 'Good Luck'
            }

            this.updateGame = this.updateGame.bind(this)
      }

      updateGame(tile, isFlagging) {
            (isFlagging) ? tile.toggleFlag() : tile.explore();
            if (this.state.board.checkComplete()) {
                  this.state.status = "You finished!"
            }
            this.setState({board: this.state.board})
      }

      reset() {
            let data = Util.convertBoardToString(this.state.board.tiles);
            this.setState({
                  board: new Board({tiles: data})
            })
      }

      importPuzzle(puzzleData) {
            
      }

      render() {
            let status = "Good Luck"
            if (this.state.board.checkComplete()) {
                  status = "You finished!"
            }

            return (
                  <div className="puzzle-container">
                        <h1 className="title">Paint-by-Numbers</h1>
                        <div className="puzzle-content-container">
                              {/* <HintX board={this.state.board} />
                              <HintY board={this.state.board} /> */}
                              <BoardComponent update={this.updateGame} board={this.state.board} />
                        </div>
                        <h2 className="status">{status}</h2>
                  </div>
            )
      }
}

export default Game;