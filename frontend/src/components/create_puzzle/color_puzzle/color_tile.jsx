

import React from "react";
import Util from "../../game_logic/util";

class ColorTile extends React.Component {
      constructor(props) {
            super(props)
      }


      onMouseDown(event) {
            event.preventDefault()
            this.props.addToSelection(this.props.tile)
      }
      onMouseOver(event) {
            event.preventDefault();
            this.props.currentMouseOver(this.props.tile)

            if (this.props.board.state.selecting && !this.props.tile.explored) {
                  this.props.addToSelection(this.props.tile)
            }
      }

      onKeyDown(event) {
            event.preventDefault()
            this.props.clearSelection()
      }
      render() {

            let renderTile = this.props.tile;
            let mouseOverTile = this.props.board.state.currentMouseover;
            let text = ""
            let classText = "tile tile-board-color"
            let overlayClassText = "tile-overlay puzzle-tile-overlay"
            if (mouseOverTile) {
                  if (renderTile.pos !== mouseOverTile.pos && (renderTile.pos[0] === mouseOverTile.pos[0] || renderTile.pos[1] === mouseOverTile.pos[1])) {
                        overlayClassText += ' tile-highlighted'
                  } else {
                        classText += " tile-empty"
                  }
            } else {
                  classText += ' tile-empty'
            }
            let renderTileStyle;  

            renderTileStyle = (renderTile.colored) ? { background: this.props.tile.color } : {}
            if (this.props.board.state.selection.includes(renderTile) && !renderTile.explored) {
                  overlayClassText = " tile-color-selected"
                  renderTileStyle = {background: this.props.board.state.selectedColor}
            }

            if (mouseOverTile && mouseOverTile === renderTile) {
                  renderTileStyle= {background: this.props.board.state.selectedColor}
            } 

            let dims = Util.convertDimensionsToString(this.props.boardObject.dimensions)
            switch (dims) {
                  case "5x5":
                        classText += ' puzzle-tile-5x5'
                        overlayClassText += ' puzzle-tile-overlay-5x5'

                        break;
                  case "10x10":
                        classText += ' puzzle-tile-10x10'
                        overlayClassText += ' puzzle-tile-overlay-10x10'
                        break
                  case "15x15":
                        classText += ' puzzle-tile-15x15'
                        overlayClassText += ' puzzle-tile-overlay-15x15'
                        break
                  case "20x20":
                        classText += ' puzzle-tile-20x20'
                        overlayClassText += ' puzzle-tile-overlay-20x20'
                        break
                  default:
            }
            
            
            return (
                  <td
                        className={classText}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseOver={this.onMouseOver.bind(this)}
                        onKeyUp={this.onKeyDown.bind(this)}
                        style={renderTileStyle}
                  >
                        <div className={overlayClassText}>
                              {text} 
                        </div>
                    
                  </td>
            )
      }
}

export default ColorTile;