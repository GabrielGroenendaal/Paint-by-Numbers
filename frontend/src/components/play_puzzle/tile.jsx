import React from "react";
import Util from "../game_logic/util";

class Tile extends React.Component {
      constructor(props) {
            super(props);
      }

      handleClick(event) {
            event.preventDefault();
            this.props.update(this.props.tile, (event.altKey ? true : false))
      }

      onMouseDown(event) {
            event.preventDefault();
            if (this.props.board.state.selecting) {
                  this.props.addToSelection(this.props.tile)
            }
      }

      onMouseOver(event) {
            event.preventDefault();
            this.props.currentMouseOver(this.props.tile)

            if (this.props.board.state.selecting && !this.props.tile.explored) {
                  this.props.addToSelection(this.props.tile)
            }
      }

      render() {
            let renderTile = this.props.tile;
            let mouseOverTile = this.props.board.state.currentMouseover;
            let text = ""
            let classText = "tile"
            
      
            if (renderTile.explored && renderTile.bombed) {
                  classText += ' tile-bomb'
                 
            } else if (renderTile.explored) {
                  classText += " tile-explored"
                  
            } else if (renderTile.flagged) {
                  classText += " tile-flagged"
                  text = "⚑"
            } else {
                  if (mouseOverTile) { 
                        if (renderTile.pos != mouseOverTile.pos && (renderTile.pos[0] === mouseOverTile.pos[0] || renderTile.pos[1] === mouseOverTile.pos[1])) {
                              classText += ' tile-highlighted'
                        } else {
                              classText += " tile-unexplored"
                        }
                  } else {
                        classText += " tile-unexplored"
                  }
                  
            }
            let renderTileStyle;  

            renderTileStyle = (renderTile.colored && renderTile.explored) ? { background: this.props.tile.color } : {}
            if (this.props.board.state.selection.includes(renderTile) && !renderTile.explored) {
                  classText = "tile tile-color-selected"
                  renderTileStyle = {background: this.props.board.state.selectedColor}
            }
            let dims = Util.convertDimensionsToString(this.props.boardObject.dimensions)
            switch (dims) {
                  case "5x5":
                        classText += ' puzzle-tile-5x5'
                        break;
                  case "10x10":
                        classText += ' puzzle-tile-10x10'
                        break
                  case "15x15":
                        classText += ' puzzle-tile-15x15'
                        break
                  case "20x20":
                        classText += ' puzzle-tile-20x20'
                        break
                  default:

            }
            
            
            return (
                  <td
                        className={classText}
                        onClick={this.handleClick.bind(this)}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseOver={this.onMouseOver.bind(this)}
                        style={renderTileStyle}
                  >
                        {text}
                  </td>
            )
      }
}

export default Tile;