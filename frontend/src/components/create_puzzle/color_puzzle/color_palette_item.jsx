import React from "react";
import Util from "../../game_logic/util";
class ColorPaletteItem extends React.Component {
      constructor(props) {
            super(props)
            this.click = this.click.bind(this)
      }

      click(event) {
            event.preventDefault()
            this.props.selectColor(this.props.color)
      }

      render() {
            const styles = {
                  background: this.props.color
            }

            let classText = 'color-tile'

            let dims = Util.convertDimensionsToString(this.props.boardObject.dimensions)
            switch (dims) {
                  case "5x5":
                        classText += ' color-tile-5x5'
                        break;
                  case "10x10":
                        classText += ' color-tile-10x10'
                        break
                  case "15x15":
                        classText += ' color-tile-15x15'
                        break
                  case "20x20":
                        classText += ' color-tile-20x20'
                        break
                  default:

            }
            return (
                  <td
                        className={classText}
                        style={styles}
                        onClick={this.click}

                  >
                       
                  </td>
            )
      }
}

export default ColorPaletteItem