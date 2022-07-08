import ColorUtil from "./color_util";

class TileCreate {
      constructor(options) {
            this.board = options.board;
            this.color = options.color || "#FFFFFF";
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

// module.exports = TileCreate;
export default TileCreate;