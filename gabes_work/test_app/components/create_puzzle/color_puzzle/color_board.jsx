

import React from "react";
import ColorTile from "./color_tile";
import ColorPaletteLeft from "./color_palette_left";

class ColorBoard extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  selection: [],
                  selecting: false,
                  currentMouseover: null,
                  selectedColor: 'white'
            }
            this.addToSelection = this.addToSelection.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this)
            this.onMouseUp = this.onMouseUp.bind(this)
            this.currentMouseOver = this.currentMouseOver.bind(this)
      }
      addToSelection(tile) {
            this.setState(prevState => ({ selection: [...prevState.selection, tile]}))
      }

      selectColor(color) {
            this.setState(prevState => ({ selectedColor: color }))
            console.log(this.state.selectedColor)
      }

      onMouseDown(event) {
            event.preventDefault()
            this.setState(prevState => ({ selecting: true }))
      }

      onMouseUp(event) {
            event.preventDefault()
            this.state.selection.forEach(checkTile => {
                  checkTile.changeColor(this.state.selectedColor);
                  // this.props.update(checkTile, event.altKey ? true : false)
            })
            this.setState(prevState=> ({ selection: [], selecting: false }))
      }

      onContextMenu(event) {
            event.preventDefault()
            this.setState(prevState=> ({ selection: [], selecting: false }))
            console.log(event.button)
      }
      
      currentMouseOver(tile) {
            this.setState(prevState => ({currentMouseover: tile}))
      }

      updateTile(tile) {
            tile.changeColor(this.state.selectedColor);
      }

      render() {
            return (
                  <table
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseUp={this.onMouseUp.bind(this)}
                        onContextMenu={this.onContextMenu.bind(this)}
                        // onMouseOut={this.onMouseLeave.bind(this)}
                        className="board-container">
                        <tbody>
                              <ColorPaletteLeft selectColor={this.selectColor.bind(this)} />
                        {/* <HintX hints={hintsX} /> */}
                              {this.props.board.tiles.map((ele, idx) => {
                                    let className = 'board-row board-row-' + idx.toString()
                                    return (
                                          <tr className={className} key={idx.toString()}>
                                                
                                                      {/* <HintComponent hint={hintsY[idx]} /> */}
                                                      {this.props.board.tiles[idx].map((innerEle, innerIdx) => {
                                                            return <ColorTile
                                                                  key={idx.toString() + innerIdx.toString()}
                                                                  update={this.props.update}
                                                                  tile={innerEle}
                                                                  addToSelection={this.addToSelection}
                                                                  currentMouseOver={this.currentMouseOver}
                                                                  board={this}
                                                                  updateTile={this.updateTile.bind(this)}
                                                            />
                                                      })}
                                                
                                          </tr>
                                    )
                              })}
                        </tbody>
                  </table>
            )
      }
}

export default ColorBoard;