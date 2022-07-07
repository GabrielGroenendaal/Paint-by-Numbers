
import React from "react";
import Game from "./play_puzzle/game";
import CreatePuzzle from "./create_puzzle/create_puzzle";
// This is where Routing will occur 

class Main extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                  <div>
                        {/* <Game /> */}
                        <CreatePuzzle />
                  </div>
            
            )
      }
}

export default Main;


// Step #1 Pixelate the Image using a pixel size = to the image's width / the number of tiles on the grid
// Step #2: place the image on a canvas, and then iterate through each "tile" on the canvas to create an array of colors 

// Step #3: analyze this array of colors somehow to determine a watershed point for what will be positive or negative space, then  return a string of this information
// Step #4: apply this information to the board, allowing users to interact with it one last time to toggle spaces before final submission