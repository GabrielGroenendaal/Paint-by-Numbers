import React from "react";


class Tile extends React.Component {
      constructor(props) {
            super(props);
            this.state = {

            }
      }

      handleClick(event) {
            event.preventDefault();
            this.props.update(this.props.tile, (event.altKey ? true : false))
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
            
            return (
                  <div
                        className={'tile tile-' + classText + ' num-' + text}
                        onClick={this.handleClick.bind(this)}
                  >
                        {text}
                  </div>
            )
      }
}

export default Tile;