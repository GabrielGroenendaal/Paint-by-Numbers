# Paint-by-Numbers
### <a href="https://paint-by-number.herokuapp.com/#/?/" target="_blank">Live Link</a>
<img width="671" alt="Paint by Numbers" src="https://user-images.githubusercontent.com/36039557/180854871-53b0a8dc-7257-4a25-a6cd-ec9049bc0c17.png">

<a href="https://paint-by-number.herokuapp.com/#/?/" target="_blank">**Paint-by-Numbers**</a> is an application that lets user create, play and share <a href="https://en.wikipedia.org/wiki/Nonogram" target="_blank">**Nonogram**</a> puzzles. Nonograms are picture-logic puzzles where the players goal is to reveal all the **filled** tiles on the board while revealing as few **empty** tiles as possible. Nonograms can be created with ***any arrangement*** of filled and empty tiles on a grid, and are often designed to produce a simple image like Pixel art upon completion. 

On our application, Paint-by-Numbers, users are able to draw their own puzzles using an in-site interface or upload an image to be converted into a Puzzle. They are then able to share links to these puzzles with other users for them to try and solve. In addition, Users have the option to create accounts to store libraries of puzzles they've created or save their progress on puzzles they're trying to solve between sessions or devices.  

***

## Technologies, Libraries, and APIs
- Frontend
   - ```React```
   - ```HTML5```
   - ```CSS```
   - ```react-pixelify```
- Backend
   - ```Express```
   - ```Node.js```
- Database 
   - ```Mongoose```
   - ```MongoDB```

***

## Major Features and Code Highlights
### Puzzle Board
![Puzzle Board Interaction](https://user-images.githubusercontent.com/36039557/181072652-d446de98-d2d5-4e1b-9673-f4944000c907.gif)

The core feature of our application is the ```Board```, the interface through which players interact with the puzzle and receive game information. The board houses the lion's share of gameplay functionality, a dynamic, responsive complex of React Components that are intertwined with the game logic, as constructed in Javascript. It was essential to our team to make it as seamless and enjoyable to use as possible. 

The board is comprised of ```Tile``` and ```Hint``` components arranged into a table element. Each ```Tile``` features dynamic styling to indicate its status (hover, active, etc.), the state of its associated ```Tile.js``` object (filled, empty, flagged, unrevealed),  and color. Users are able to click and drag to select multiple tiles at once, particularly essential when drawing a puzzle using the in-game tools. This was implemented using the ```selection``` and ```selecting``` variables on the state, and a number of event handlers.
```
// Board.jsx
class Board extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  selection: [],
                  selecting: false,
            }
            this.addToSelection = this.addToSelection.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this)
            this.onMouseUp = this.onMouseUp.bind(this)
      }
      
      // Creates the functionality to "clear" the selection 
      componentDidMount() {
            document.addEventListener('keydown', (event) => {
                  if (!event.altKey) {
                        this.setState(prevState => ({ selection: [], selecting: false }))
                  }
            });
      }
      
      // A bound function passed to each Tile component to update the selection object
      addToSelection(tile) {
            if (!this.state.selection.includes(tile)) {
                  this.setState(prevState => ({ selection: [...prevState.selection, tile] }))
            }
      }

      onMouseDown(event) {
            event.preventDefault()
            this.setState(prevState => ({ selecting: true }))
      }
      
      // Calls the props function to make moves on the Puzzle board using each tile in the selection
      onMouseUp(event) {
            event.preventDefault()
            this.state.selection.forEach(checkTile => {
                  this.props.update(checkTile, event.altKey ? true : false)
            })
            this.setState(prevState => ({ selection: [], selecting: false }))
      }

     // ...
}
```
```
class Tile extends React.Component {
      //...Functions that are given to each Tile element 
      onMouseDown(event) {
            event.preventDefault();
            this.props.addToSelection(this.props.tile)
      }

      onMouseOver(event) {
            event.preventDefault();
            if (this.props.board.state.selecting && !this.props.tile.explored) {
                  this.props.addToSelection(this.props.tile)
            }
      }
}
```
***
### Saving Progress on Puzzles
![Puzzle Library](https://user-images.githubusercontent.com/36039557/181075232-c933324b-610d-4bee-8fc1-feef8cc6fa12.gif)

A ```User``` that is logged in is able to save their ```PuzzleProgress``` to resume later. This feature makes use of complex backend functionality that converts the board state into an object that can exported for storage and later imported into to other components. 

One of the greatest challenges of this project was to make a functional ```Library``` component that displays all the ```Puzzles``` the current user has progress on. The component needed to fetch all the ```PuzzleProgress``` objects for that ```User```,  as well as ```tileData``` for those puzzles to render displays on the ```Library```.
```
class Library extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saved_puzzles: [],
            made_puzzles: [],
        }
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchUserPuzzles(this.props.currentUser.id).then((res1) => {
                if (res1) {
                    let puzzles = res1.puzzles.data;
                    let new_puzzles = []
                    puzzles.forEach(puzzle => {
                        let puzzle_datum = {
                            id: puzzle._id,
                            size: puzzle.size,
                            tileData: puzzle.tile_data,
                            creator_id: puzzle.creator_id
                        }
                        new_puzzles.push(puzzle_datum)
                        this.setState({ made_puzzles: new_puzzles })
                    })
                }
            }).catch(err => console.log(err))
                this.props.fetchUserProgresses(this.props.currentUser.id).then((res2) => {
                    if (res2) {
                        let progresses = res2.progresses.data;
                        let new_progress = []
                        progresses.forEach(progress => {
                            this.props.fetchPuzzle(progress.puzzle_id).then((res3) => {
                                if (res3.puzzle.data) {
                                    let progress_datum = {
                                        id: progress._id,
                                        puzzle_id: progress.puzzle_id,
                                        user_id: progress.user_id,
                                        tileData: res3.puzzle.data.tile_data,
                                        progress: progress.progress_data,
                                        size: res3.puzzle.data.size,
    
                                    };
                                    new_progress.push(progress_datum)
                                    this.setState({ saved_puzzles: new_progress })
                                }
                            })
                        })
                    }
                }).catch(err => console.log(err))
        }
    }
}
```
In the ```LibrarySavedItem``` component, the ```tileData``` is then used to construct a little display of the puzzle state, including revealed tiles and mistakes. If clicked, the app redirects the user to the ```Puzzle``` and loads their ```PuzzleProgress```.
```
class LibrarySavedItem extends React.Component {
        constructor(props) {
              super(props)
              let progress = (this.props.savedPuzzle.progress) ? {
                    freshProgress: this.props.savedPuzzle.progress
              } : null
              let options = {
                    freshTiles: this.props.savedPuzzle.tileData,
                    dimensions: this.props.savedPuzzle.size
              }
              let newBoard = new Board(options);
              newBoard.updateBoard(Util.parseProgressFromString(this.props.savedPuzzle.progress))

              this.state = {
                    board: newBoard
              }
        }
        
        onClick(event) {
                  event.preventDefault();
                  if (event.altKey) {
                        this.props.deleteProgress(this.props.savedPuzzle.id)
                        this.setState({
                              board: null
                        })
                  } else {
                        this.props.history.push(`/`);
                        this.props.history.push(`/${this.props.savedPuzzle.puzzle_id}`)
                        this.props.closeModal()
                  }
        }
        render(){
            // Renders the this.state.board tiles 
        }
```
***
### Converting Images to Puzzles
One of the most difficult features to implement for this application was the conversion of images into functional Nonogram Puzzles. This process requires the pixelization of the image, which was accomplished using a modified version of ```react-pixelify```. The app then renders this picture on an invisible ```canvas```, which once mounted will be iterated through to map each pixel's RGB value to a ```tileData``` array.  
```
// ImageOptions.jsx
class ImageOptions extends React.Component {
       //....
       // Called upon the submission of an image URL 
       handleSubmit(event) {
            event.preventDefault()
            let component = <Pixelify
                  src={this.state.pictureURL}
                  width={550}
                  height={550}
                  pixelSize={550 / this.props.board.dimensions[0]}
                  centered={true}
                  fillTransparencyColor={'white'}
            />
            this.props.submitImageForCheck(component) // sets up the component to be rendered to the webpage
      }
      // ...
}
```
```
// color_util.js
convertImageToPixels(dimensions) {
            let img = document.getElementById('hiddenPixels')
            let ctx = img.getContext('2d');
            let width = img.width;
            let increment = Math.floor(width / dimensions);
            let tile_data = []
            for (let i = 0; i < dimensions; i++) {
                  for (let k = 0; k < dimensions; k++) {
                        let pixel_data = ctx.getImageData(
                              (k * increment) + increment,
                              (i * increment) + increment,
                              1,
                              1
                        ).data
                        tile_data.push([
                              this.rgbToHex(
                                    pixel_data[0],
                                    pixel_data[1],
                                    pixel_data[2]
                              ),
                              false
                        ])
                  }

            }
            return tile_data;
}
```

The ```tileData``` is then analyzed to determine the ```averagePixel``` value of the entire board by averaging RGB values. The app then iterates through the ```tileData``` array, using the ```averagePixel``` to determine whether each tile is **filled** or **empty**. The updated array is then returned to the ```CreatePuzzle``` component where it is imported onto the ```Board``` so that users can edit and toggle the tiles.  
```
const ColorUtil = {
      // The big Guns
      seedBombsByColor(board) {
            let avg = this.averageColor(board)
            let avgpixel = avg.r + avg.g + avg.b;
            return this.mapTiles(checkTilesOverall, avgpixel)
      },

      averageColor(tiles) {
            let r = 0
            let g = 0;
            let b = 0;
            tiles.forEach(tile => {
                  let hex = this.hexToRGB(tile[0])
                  r += hex.r * hex.r
                  g += hex.g * hex.g
                  b += hex.b * hex.b
            })
            let num = tiles.length;
            return {
                  r: Math.sqrt(r / num),
                  g: Math.sqrt(g / num),
                  b: Math.sqrt(b / num)
            }
      },

      mapTiles(tiles, avg) {
            tiles.forEach((tile, idx) => {
                  let hex = this.hexToRGB(tile[0])
                  let hexTotal = hex.r + hex.g + hex.b;
                  if (avg < 350) {
                        if (hexTotal < avg) {
                              tiles[idx][1] = 'true'
                        }
                  } else {
                        if (hexTotal >  avg) {
                              tiles[idx][1] = 'true'
                        }
                  }
            })
            return tiles;
      }
}
```
***

### Meet the Team
* <a href="https://www.linkedin.com/in/gabriel-groenendaal" target="_blank">Gabriel Groenendaal</a>
* <a href="https://www.linkedin.com/in/karen-polanco-374721180/" target="_blank">Karen Polanco</a>
* <a href="https://www.linkedin.com/in/michael-ramoutar/" target="_blank">Michael Ramoutar</a>


***
<!--
## Features
* User Accounts 
  * Frontend User Auth
  * Library
     * Authored Puzzles
     * Saved Puzzles
* Puzzles 
  * Create Puzzle
  * Edit Puzzle 
  * Share Puzzle 
  * Access Puzzle
* Puzzle Generator
  * Generate Random Puzzle 
  * Select Random Puzzle from Library  
  
## Stretch Features
* Puzzle Drawer
  * 

## Puzzle 
- "Board": stores which of the tiles is positive or negative 
- "Tiles": stores what image or visual is underneath a specific tile 
- "Numbers": the hints on the edge of the board informed by the board
- "Original Image": the original image to display after the puzzle is solved
- "Author"
- "Difficulty"
- "Size"

```
 render() {
            if (!this.props.board === null) {  return null  }

            this.props.board.updateHintsX();
            this.props.board.updateHintsY();
            let hintsX = this.props.board.hintsX;
            let hintsY = this.props.board.hintsY;

            return (
                  <table
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseUp={this.onMouseUp.bind(this)}
                        className="board-container">
                        <tbody>
                        
                              <HintX hints={hintsX} boardObject={this.props.board} />
                              
                              {this.props.board.tiles.map((ele, idx) => {
                                    return (
                                          <tr className={'board-row board-row-' + idx.toString()} key={idx.toString()}>
                                          
                                                <HintComponent hint={hintsY[idx]} boardObject={this.props.board} />
                                                
                                                {this.props.board.tiles[idx].map((innerEle, innerIdx) => {
                                                      return <TileComponent
                                                            key={idx.toString() + innerIdx.toString()}
                                                            update={this.props.update}
                                                            tile={innerEle}
                                                            addToSelection={this.addToSelection}
                                                            currentMouseOver={this.currentMouseOver}
                                                            board={this}
                                                            boardObject={this.props.board}
                                                      />
                                                })}
                                          </tr>
                                    )
                              })}
                        </tbody>
                  </table>
            )
      }
```

```
class Tile extends React.Component {
      // ....
      
      render() {
            let renderTile = this.props.tile;
            let mouseOverTile = this.props.board.state.currentMouseover;
            
            // The variables used for dynamic styling
            let text = ""
            let classText = "tile"
            let overlayClassText = "tile-overlay puzzle-tile-overlay
            
            // Applies the color of the Tile, if it exists
            let renderTileStyle = (renderTile.colored && renderTile.explored) ? { background: this.props.tile.color } : {}
            
            // Game Logic Styling
            if (renderTile.explored && renderTile.bombed) {
                  overlayClassText += ' tile-bomb'
                  classText += ' tile-bomb'
            } else if (renderTile.explored) {
                  classText += " tile-explored"
            } else if (renderTile.flagged) {
                  overlayClassText += " tile-flagged"
                  text = "⚑"
            } else {
                   classText += " tile-unexplored"
            }
            
            // Creates the crosshair effect
            if (mouseOverTile) {
                  if (renderTile.pos !== mouseOverTile.pos 
                    && (renderTile.pos[0] === mouseOverTile.pos[0] || renderTile.pos[1] === mouseOverTile.pos[1])) {
                        overlayClassText += ' tile-highlighted'
                  }
            }
            
            // Applies styling to Tiles that are inside the "selection" object that aren't explored (i.e. are interactable)
           if (this.props.board.state.selection.includes(renderTile) && !renderTile.explored) {
                  overlayClassText += " tile-selected"
            }
            
            // Applies styling to Tiles to normalize the board size
            let dims = Util.convertDimensionsToString(this.props.boardObject.dimensions)
            switch (dims) {
                  case "5x5":
                        classText += ' puzzle-tile-5x5'
                        overlayClassText += ' puzzle-tile-overlay-5x5'
                        break;
                  case "10x10":
                        classText += ' puzzle-tile-10x10'
                        overlayClassText += ' puzzle-tile-overlay-10x10'
                        break
                  case "15x15":
                        classText += ' puzzle-tile-15x15'
                        overlayClassText += ' puzzle-tile-overlay-15x15'
                        break
                  case "20x20":
                        classText += ' puzzle-tile-20x20'
                        overlayClassText += ' puzzle-tile-overlay-20x20'
                        break
                  default:
            }
            
            return (
                  <td
                        className={classText}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseOver={this.onMouseOver.bind(this)}
                        style={renderTileStyle}
                  >
                        <div className={overlayClassText}>
                              {text}
                        </div>
                  </td>
            )
      }
}
```
- database (mongoDB and express)
- pixelation library (react-pixilate)
- AWS (cloud storage)
- heroku (deployment) -->
