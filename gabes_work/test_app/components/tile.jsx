import React from "react";


class Tile extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  selected: false
            }
            // this.getTile = this.getTile.bind(this)
            // this.toggleSelected = this.toggleSelected.bind(this)
      }
      // getTile() {
      //       return this.props.tile
      // }
      // toggleSelected() {
      //       this.setState({selected: false})
      // }
      handleClick(event) {
            event.preventDefault();
            this.props.update(this.props.tile, (event.altKey ? true : false))
      }

      // onMouseDown(event) {
      //       console.log("check")
      //       event.preventDefault();
      //       if (this.props.board.state.selecting) {
      //             this.setState({ selected: true})
      //             this.props.addToSelection(this)
      //       }
      // }

      // onMouseOver(event) {
      //       console.log("check")
      //       event.preventDefault();
      //       if (this.props.board.state.selecting) {
      //             this.setState({ selected: true})
      //             this.props.addToSelection(this)
      //       }
      // }

      // onMouseUp(event) {
      //       event.preventDefault()
      //       this.props.toggleSelecting()
      // }

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
            if (this.state.selected) { classText += " tile-selected"}
            return (
                  <div
                        className={'tile tile-' + classText + ' num-' + text}
                        onClick={this.handleClick.bind(this)}
                        // onMouseDown={this.onMouseDown.bind(this)}
                        // onMouseOver={this.onMouseOver.bind(this)}
                        // onMouseUp={this.onMouseUp.bind(this)}
                  >
                        {text}
                  </div>
            )
      }
}

export default Tile;