

import React from "react";
import Util from "../../game_logic/util";
class BombTile extends React.Component {
      constructor(props) {
            super(props)
      }
      onMouseDown(event) {
            event.preventDefault();
            this.props.addToSelection(this.props.tile)
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

            if (mouseOverTile) {
                  if (renderTile.pos != mouseOverTile.pos && (renderTile.pos[0] === mouseOverTile.pos[0] || renderTile.pos[1] === mouseOverTile.pos[1])) {
                        classText += ' tile-highlighted'
                  } else {
                        classText += " tile-empty"
                  }
            } else {
                  classText += ' tile-empty'
            }
            let renderTileStyle;  

            renderTileStyle = (renderTile.colored) ? { background: this.props.tile.color } : {}
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

            if (renderTile.bombed) {
                  classText += ' bomb-selection-tile'
            }
            return (
                  <td
                  className={classText}
                  onMouseDown={this.onMouseDown.bind(this)}
                  onMouseOver={this.onMouseOver.bind(this)}
                  style={renderTileStyle}
            >
                  {text}
            </td>
            )
      }
}

export default BombTile;