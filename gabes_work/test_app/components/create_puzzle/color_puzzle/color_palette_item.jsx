import React from "react";

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
            return (
                  <td
                        className="color-tile"
                        style={styles}
                        onClick={this.click}

                  >
                       
                  </td>
            )
      }
}

export default ColorPaletteItem