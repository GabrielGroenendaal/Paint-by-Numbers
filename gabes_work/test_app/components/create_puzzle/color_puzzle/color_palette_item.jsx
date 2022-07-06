import React from "react";

class ColorPaletteItem extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            let style = "--color: " + this.props.color;
            return (
                  <td>
                        {this.props.color}
                  </td>
            )
      }
}

export default ColorPaletteItem