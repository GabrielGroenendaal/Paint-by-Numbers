

class TileCreate {
      constructor(options) {
            this.board = options.board;
            this.color = options.color || "white";
            this.pos = options.pos;
            this.explored = options.explored || false;
            this.bombed = options.bombed || false;
            this.flagged = options.flagged || false;
            this.colored = options.colored || false;
      }

      changeColor(color) {
            this.color = color;
            this.colored = true;
      }

      toggleBombed() {
            this.bombed = (this.bombed) ? false : true 
      }
}

module.exports = TileCreate;