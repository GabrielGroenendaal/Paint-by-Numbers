
// const { default: Hint } = require('./hint');
// const Tile = require('./tile');
// const Util = require('./util')
// const HintItem = require('./hint')
import Util from "./util";
import Tile from "./tile";
import HintItem from "./hint";

class Board {
      constructor(options = {}, progress = {}) {
            this.dimensions = options.dimensions || "10x10";
            this.dimensions = Util.parseDimension(this.dimensions)
            this.difficulty = options.difficulty || "moderate";
            this.originalImageUrl = options.originalImageUrl || "default";
            this.genre = options.genre || "NA";
            this.id = options.id || "empty";
            this.total = 0;

            // Parse the Tile Data 
            this.tiles = (options.tiles) ? this.makeTileMap(options.tiles) : this.generateBoard();
            if (!options.tiles) { this.plantBombs() } 

            // Parse the progress data
            this.mistakes = progress.mistakes || 0;
            this.guesses = progress.guesses || 0;
            this.complete = false;
            this.perfect = false;
            this.updateBoard(progress.tiles);

            
            // Generates Hints
            this.hintsX = [];
            this.updateHintsX();
            this.hintsY = [];
            this.updateHintsY();
      }


      makeTileMap(tileData) {
            let board = []

            for (let i = 0; i < this.width(); i++) {
                  let row = []
                  for (let k = 0; k < this.height(); k++) {
                        let thisTileData = tileData.shift();
                        let bombedStatus = Util.parseBoolean(thisTileData[1]);
                        if (bombedStatus == false) { this.total += 1; }
                        let tileOptions = {
                              color: thisTileData[0],
                              bombed: bombedStatus,
                              board: this,
                              explored: false, 
                              flagged: false,
                              pos: [i,k]
                        }
                        let tile = new Tile(tileOptions)
                        row.push(tile)
                  }
                  board.push(row)
            }
            return board
      }

      generateBoard() {
            let board = []
      
            for (let i = 0; i < this.width(); i++) {
                  let row = []
                  for (let k = 0; k < this.height(); k++) {
                        let tileOptions = {
                              bombed: false,
                              color: 'gray',
                              board: this,
                              explored: false, 
                              flagged: false,
                              pos: [i,k]
                        }
                        let tile = new Tile(tileOptions)
                        row.push(tile)
                  }
                  board.push(row)
            }
            
            return board
      }

      plantBombs() {
            let numOfBombs = 0;
            let totalBombs = Util.randomInt(4 * this.area() / 10, 6 * this.area() / 10);
            let positions = Util.allPositions(this.dimensions);
            while (numOfBombs < totalBombs) {
                  let i = Util.randomIndex(positions);
                  
                  let x = positions[i][0];
                  let y = positions[i][1];
                  this.tiles[x][y].bombed = true;
                  positions.splice(i, 1);
                  numOfBombs += 1;
            }
            this.total = this.area() - numOfBombs;
      }

      updateHintsX() {
            let hintsX = []

            for (let i = 0; i < this.height(); i++){
                  let streak = [];
                  hintsX[i] = [];

                  for (let k = 0; k < this.width(); k++){
                        if (this.tiles[k][i].bombed === true) {
                              if (streak.length > 0) {
                                    if (streak.every(ele => ele.explored === true)) {
                                          hintsX[i].push(new HintItem(streak.length, true))
                                    } else {
                                          hintsX[i].push(new HintItem(streak.length, false))
                                    }
                                    streak = [];
                              } else {
                                    streak = []
                              }
                        } else {
                              streak.push(this.tiles[k][i]);
                        }
                  }
                  if (streak.length > 0) {
                        if (streak.every(ele => ele.explored === true)) {
                              hintsX[i].push(new HintItem(streak.length, true))
                        } else {
                              hintsX[i].push(new HintItem(streak.length, false))
                        }
                  }
            }
            //console.log(hintsX)
            this.hintsX = hintsX;
      }

      updateHintsY() {
            let hintsY = []
            for (let i = 0; i < this.width(); i++){
                  let streak = [];
                  hintsY[i] = [];

                  for (let k = 0; k < this.height(); k++){
                        if (this.tiles[i][k].bombed === true) {
                              if (streak.length > 0) {
                                    if (streak.every(ele => ele.explored === true)) {
                                          hintsY[i].push(new HintItem(streak.length, true))
                                    } else {
                                          hintsY[i].push(new HintItem(streak.length, false))
                                    }
                                    streak = [];
                              } else {
                                    streak = []
                              }
                        } else {
                              streak.push(this.tiles[i][k]);
                        }
                  }
                  if (streak.length > 0) {
                        if (streak.every(ele => ele.explored === true)) {
                              hintsY[i].push(new HintItem(streak.length, true))
                        } else {
                              hintsY[i].push(new HintItem(streak.length, false))
                        }
                  }
            }
            this.hintsY = hintsY;
      }

      updateBoard(progress) {
            if (progress == null) { return null }

            for (let i = 0; i < this.width(); i++) {
                  for (let k = 0; k < this.height(); k++) {
                        let tileProgress = progress.shift();
                        if (tileProgress[0] === "true") {
                              this.tiles[i][k].explore()
                        }
                        else if (tileProgress[1] === "true") {
                              this.tiles[i][k].toggleFlag()
                        }
                        // this.tiles[i][k].explored = tileProgress.explored;
                        // this.tile[i][k].flagged = tileProgress.flagged;
                  }
            }
      }

      makeMove(tile) {
            if (tile.bombed) {
                  this.mistakes += 1;
            } else {
                  this.guesses += 1;

            }
            this.updateHintsX();
            this.updateHintsY();
            this.checkComplete()
      }

      revealTile(x, y) {
            this.tiles[x][y].explore()
      }

      revealAll() {
            let apple = this.tiles.flat().forEach(tile => tile.explore())
            // let count = 0;
            // while (count < apple.length) {
            //       setTimeout(apple[count], 200)
            //       count++
            // }
      }

      checkComplete() {
            if (this.guesses >= this.total) {
                  this.complete = true;
                  if (this.mistakes <= 0) {
                        this.perfect = true;
                  }
            } else {
                  this.complete = false;
            }
      }


      print() {
            for (let i = 0; i < this.width(); i++) {
                  let row = ""
                  for (let k = 0; k < this.height(); k++) {
                        row += this.tiles[i][k].print()
                  }
            }
      }

       
      width() {
            return this.dimensions[0]
      }

      height() {
            return this.dimensions[1]
      }

      area() {
            return this.width() * this.height()
      }

      updateCrossouts(x, y) {
            let checkHintsX = this.hintsX; //Object.assign({}, this.hintsX);
            let checkHintsY = this.hintsY;  //Object.assign({}, this.hintsY);

            let filled = true;
            let cellIndex = 0;
            let hintIndex = 0;

            for (cellIndex; cellIndex < this.tiles[x].length;) {
                  if (this.tiles[x][cellIndex].bombed) {
                        //console.log(checkHintsX[x])
                        if (hintIndex < checkHintsX[x].length) {
                              for (let i = 0; i < Math.abs(checkHintsX[x][hintIndex].num); i++) {
                                    if (this.tiles[x][cellIndex].bombed) {
                                          cellIndex += 1;
                                    } else {
                                          filled = false;
                                          break;
                                    }
                              }
                              if (this.tiles[x][cellIndex].bombed) {
                                    filled = false;
                                    break;
                              }
                              hintIndex += 1;
                        } else {
                              filled = false;
                              break;
                        }
                  } else {
                        cellIndex += 1;
                  }
            } 

            if (cellIndex < this.tiles[x].length || hintIndex < checkHintsX[x].length){
                  filled = false;
            }
            for (let i = 0; i < checkHintsX[x].length; i++) {
                  //checkHintsX[x][i].num = Math.abs(checkHintsX[x][i].num) * (filled ? -1 : 1)
                  if (filled = true) {
                        checkHintsX[x][i].crossout = true;
                  }
            }



      }
}

export default Board;
