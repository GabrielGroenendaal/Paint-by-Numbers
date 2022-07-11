// const Board = require('./board')
// const Util = require('./util')
import Board from './board'
import Util from './util'
class Game {
      constructor(puzzle = {}, progress = {}) {
            if (puzzle.tiles) { puzzle.tiles = Util.parseTileDataFromString(puzzle.tiles) }
            if (progress.tiles) { progress.tiles = Util.parseProgressFromString(progress.tiles) }
            this.board = new Board(puzzle, progress);
      }

      print() {
            this.board.print()
      }

      reset() {
            let data = Util.convertBoardToString(this.board.tiles);
            this.board = new Board({ tiles: data });
      }
}

const makeProgress = () => {
      let progress = ""
      for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {
                  progress += "_true|false"       
            }            
      }
      return progress
}

let newGame = new Game({}, { tiles: makeProgress() });


newGame.board.revealTile(0, 2);
// console.log(boardData)
// let newGame2 = new Game({ tiles: boardData });
// newGame2.print()

// newGame.print()
// console.log("----------------------------")
// newGame2.print()
//console.log(newGame.board.tiles)
export default Game;