
import React from "react";
//import CreatePuzzle from "./create_puzzle/create_puzzle";
//import Pixelify from "./create_puzzle/images/pixel";
import NavBarContainer from "./navbar/nav_bar_container";
import Footer from './navbar/footer'
import Modal from './modals/modal';
import PlayPuzzleContainer from './play_puzzle/play_puzzle_container'
import CreatePuzzleContainer from "./create_puzzle/create_puzzle_container";
import { createPortal } from "react-dom";
// This is where Routing will occur 

class Main extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  status: 1
            }
            this.swap = this.swap.bind(this)
      }

      swap() {
            let newState = (this.state.status === 1) ? 2 : 1
            this.setState({ status: newState })
      }
      render() {
            let component = (this.state.status === 1) ? <PlayPuzzleContainer swap={this.swap} /> : <CreatePuzzleContainer swap={this.swap.bind(this)}  />
            return (
                  <div>
                        <Modal swap={this.props.swap}/>
                        <NavBarContainer />
                        {component}
                  
                        <Footer />
                  </div>
            
            )
      }
}

export default Main;


// Step #1 Pixelate the Image using a pixel size = to the image's width / the number of tiles on the grid
// Step #2: place the image on a canvas, and then iterate through each "tile" on the canvas to create an array of colors 

// Step #3: analyze this array of colors somehow to determine a watershed point for what will be positive or negative space, then  return a string of this information
// Step #4: apply this information to the board, allowing users to interact with it one last time to toggle spaces before final submission