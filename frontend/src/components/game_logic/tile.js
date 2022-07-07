


class Tile {
      constructor(options) {
            this.board = options.board;
            this.color = options.color || 'white';
            this.pos = options.pos;
            this.bombed = options.bombed || false;
            this.explored = options.explored || false;
            this.flagged = options.flagged || false;
      }

      explore() {
            if (this.explored) {
                  return this;
            }
            this.explored = true;
            this.board.makeMove(this);
      }

      toggleFlag() {
            if (!this.explored) {
                  this.flagged = !this.flagged;
                  return true
            }
            return false
      }

      print() {
            let str = "";
            if (this.explored === false) {
                  if (this.flagged === false) {
                        str = "_E_"
                  } else {
                        str = "_F_"
                  }
            } else {
                  if (this.bombed === false) {
                        str = "_O_"
                  } else {
                        str = "_X_"
                  }
            }
            return str;
      }
}

module.exports = Tile;