import TileCreate from './tile_create';
import Util from './util';
// import Board from '../test_app/components/play_puzzle/board'
// const TileCreate = require('./tile_create');

class BoardCreate {
      constructor(options = {}) {
            this.dimensions = Util.parseDimension(options.dimensions || "10x10")
            this.difficulty = options.difficulty || "easy"
            this.originalImageURL = options.originalImageURL || ""
            this.genre = options.genre || "NA"
            this.tiles = (options.tiles) ? this.makeTileMap(options.tiles) : this.generateBoard();
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
                              colored: true,
                              explored: false, 
                              flagged: false,
                              pos: [i,k]
                        }
                        let tile = new TileCreate(tileOptions)
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
                        let createTileOptions = {
                              board: this,
                              color: "#FFFFFF",
                              pos: [i, k],
                              bombed: false,
                              flagged: false,
                              explored: false,
                              colored: false
                        }
                        let thing = new TileCreate(createTileOptions)
                        row.push(thing)
                  }
                  board.push(row)                  
            }
            return board;
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

}

export default BoardCreate;