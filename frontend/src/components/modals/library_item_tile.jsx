import React from "react";
import Util from "../game_logic/util";


const LibraryItemTile = (props) => {

      let renderTile = props.tile;
      let classText = "library-tile"
      let text = ""
      if (renderTile.explored && renderTile.bombed) {
            classText += ' library-tile-explored'
            if (props.type === 'saved') {
                  classText += ' library-tile-bomb'
            }
      } else if (renderTile.explored) {
            classText += " library-tile-explored"
      } else if (renderTile.flagged) {
            classText += ' library-tile-flagged'
            text = "⚑"
      } else {
            classText += " library-tile-unexplored"
      }

      let renderTileStyle = (renderTile.colored && renderTile.explored) ? { background: renderTile.color } : {}
      if (props.type === 'made') {
            renderTileStyle = { background: renderTile.color}
      }
      let dims = Util.convertDimensionsToString(props.board.dimensions)
      switch (dims) {
            case "5x5":
                  classText += ' library-tile-5x5'
                  break;
            case "10x10":
                  classText += ' library-tile-10x10'
                  break
            case "15x15":
                  classText += ' library-tile-15x15'
                  break
            case "20x20":
                  classText += ' library-tile-20x20'
                  break
            default:
      }
      return (
            <td
                  className={classText}
                  style={renderTileStyle}
            >
            
            </td>
      )
}

export default LibraryItemTile;