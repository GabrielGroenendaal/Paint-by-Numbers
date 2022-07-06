

import React from "react";

class ColorTile extends React.Component {
      constructor(props) {
            super(props)
      }


      onMouseDown(event) {
            event.preventDefault();
            if (this.props.board.state.selecting) {
                  this.props.addToSelection(this.props.tile)
            } else {
                  this.props.updateTile(this.props.tile)
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

            if (mouseOverTile) {
                  if (renderTile.pos[0] === mouseOverTile.pos[0] || renderTile.pos[1] === mouseOverTile.pos[1]) {
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

export default ColorTile;