

import React from "react";
import ColorPaletteItem from "./color_palette_item";


class ColorPaletteLeft extends React.Component {
      constructor(props) {
            super(props)
      }

      
      render() {
            const colors = [
                  'blue',
                  'red',
                  'green',
                  'purple',
                  'gray',
                  'yellow',
                  'pink',
                  'orange',
                  'lightblue',
                  'black'
            ]
            return (
                  <tr className="color-palette-left-row">
                        {colors.map((color, idx) => {
                              return (
                                    <ColorPaletteItem color={color} key={idx.toString()} selectColor={this.props.selectColor} />
                              )
                        })}
                  </tr>
            )
      }
}

export default ColorPaletteLeft;
