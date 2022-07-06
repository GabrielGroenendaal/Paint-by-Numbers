

import React from "react";

class ColorTile extends React.Component {
      constructor(props) {
            super(props)
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
            
            if (mouseOverTile) {
                  if (renderTile.pos[0] === mouseOverTile.pos[0] || renderTile.pos[1] === mouseOverTile.pos[1]) {
                        classText += ' tile-highlighted'
                  } else {
                        classText += " tile-empty"
                  }
            } else {
                  classText += ' tile-empty'
            }
            
      
            if (this.props.board.state.selection.includes(renderTile) && !renderTile.explored) { classText = "tile tile-selected"}
            
            
            
            return (
                  <td
                        className={classText}
                        onClick={this.handleClick.bind(this)}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseOver={this.onMouseOver.bind(this)}
                  >
                        {text}
                  </td>
            )
      }
}

export default ColorTile;