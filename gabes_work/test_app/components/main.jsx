
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
                  <CreatePuzzle />
            )
      }
}

export default Main;