import React from "react";


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
            if (this.props.board.state.selecting && !this.props.tile.explored) {
                  this.props.addToSelection(this.props.tile)
            }
      }

      render() {
            let renderTile = this.props.tile;
            let text = ""
            let classText = ""

            if (renderTile.explored && renderTile.bombed) {
                  classText = 'bomb'
                  text = '💣';
            } else if (renderTile.explored) {
                  classText = "explored"
                  text = "E"
            } else if (renderTile.flagged) {
                  classText = "flagged"
                  text = "⚑"
            } else {
                  classText = "unexplored"
                  text = '-'
            }
            if (this.props.board.state.selection.includes(renderTile) && !renderTile.explored) { classText += " tile-selected"}
            
            return (
                  <div
                        className={'tile tile-' + classText + ' num-' + text}
                        onClick={this.handleClick.bind(this)}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseOver={this.onMouseOver.bind(this)}
                  >
                        {text}
                  </div>
            )
      }
}

export default Tile;