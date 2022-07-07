
import React from "react";
import BombTile from "./bomb_tile";
import Util from "../../game_logic/util";
class BombBoard extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  selection: [],
                  selecting: false,
                  currentMouseover: null,
            }
            this.addToSelection = this.addToSelection.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this)
            this.onMouseUp = this.onMouseUp.bind(this)
            this.currentMouseOver = this.currentMouseOver.bind(this)
      }
      addToSelection(tile) {
            this.setState(prevState => ({ selection: [...prevState.selection, tile]}))
      }

      onMouseDown(event) {
            event.preventDefault()
            this.setState(prevState => ({ selecting: true }))
      }

      onMouseUp(event) {
            event.preventDefault()
            this.state.selection.forEach(checkTile => {
                  checkTile.toggleBombed();
                  // this.props.update(checkTile, event.altKey ? true : false)
            })
            this.setState(prevState=> ({ selection: [], selecting: false }))
      }

      onContextMenu(event) {
            //event.preventDefault()
            this.setState(prevState=> ({ selection: [], selecting: false }))
            //console.log(event.button)
      }
      currentMouseOver(tile) {
            this.setState(prevState => ({currentMouseover: tile}))
      }
      
      updateTile(tile) {
            tile.toggleBombed() //(this.state.selectedColor);
      }


      render() {
            return (
                  <table
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseUp={this.onMouseUp.bind(this)}
                        onContextMenu={this.onContextMenu.bind(this)}
                        // onMouseOut={this.onMouseLeave.bind(this)}
                        className="board-container bomb-board-container">
                        <tbody>
                              {/* <ColorPaletteLeft selectColor={this.selectColor.bind(this)} boardObject={this.props.board} /> */}
                        {/* <HintX hints={hintsX} /> */}
                              {this.props.board.tiles.map((ele, idx) => {
                                    let className = 'board-row board-row-' + idx.toString()
                                    return (
                                          <tr className={className} key={idx.toString()}>
                                                
                                                      {/* <HintComponent hint={hintsY[idx]} /> */}
                                                      {this.props.board.tiles[idx].map((innerEle, innerIdx) => {
                                                            return <BombTile
                                                                  key={idx.toString() + innerIdx.toString()}
                                                                  update={this.props.update}
                                                                  tile={innerEle}
                                                                  addToSelection={this.addToSelection}
                                                                  currentMouseOver={this.currentMouseOver}
                                                                  board={this}
                                                                  boardObject={this.props.board}
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

export default BombBoard;