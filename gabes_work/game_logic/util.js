

const Util = {
      parseDimension(dimensions) {
            let dimension = dimensions.split("x")
            dimension = dimension.map(dimension => parseInt(dimension))
            return dimension;
      },

      parseBoolean(value) {
            if (value === "true") {
                  return true
            } else {
                  return false
            }
      },

      randomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
      },

      randomIndex(array) {
            return Math.floor(Math.random() * array.length);
      },

      allPositions(dimensions) {
            let x = dimensions[0];
            let y = dimensions[1];
            let positions = []
            for (let i = 0; i < x; i++) {
                  for (let k = 0; k < y; k++) {
                        positions.push([i,k])                        
                  }                  
            }
            return positions;
      },

      convertBoardToString(board) {
            let newStr = ""
            for (let i = 0; i < board.width(); i++) {
                  for (let k = 0; k < board.height(); k++) {
                        let tile = board.tiles[i][k]
                        newStr += "_" + tile.color + "|" + tile.bombed;
                  }                  
            }
            return newStr;
      },

      convertProgressToString(board) {
            let newStr = ""
            for (let i = 0; i < board.width(); i++) {
                  for (let k = 0; k < board.height(); k++) {
                        let tile = board.tiles[i][k]
                        newStr += "_" + tile.bombed + "|" + tile.flagged;
                  }                  
            }
            return newStr;
      },

      parseTileDataFromString(tileData) {
            let tileDataArray = []
            tileData = tileData.split("_");
            tileData.map(tileDatum => tileDataArray.push(tileDatum.split("|")));
            tileDataArray.shift();
            return tileDataArray;
      },

      parseProgressFromString(progressData) {
            let progressDataArray = [];
            progressData = progressData.split("_")
            progressData.map(progressDatum => progressDataArray.push(progressDatum.split("|")));
            progressDataArray.shift();
            return progressDataArray;
      }

}

module.exports = Util;