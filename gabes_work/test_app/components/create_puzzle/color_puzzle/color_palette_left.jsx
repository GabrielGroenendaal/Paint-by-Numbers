

import React from "react";
import ColorPaletteItem from "./color_palette_item";


class ColorPaletteLeft extends React.Component {
      constructor(props) {
            super(props)
      }

      
      render() {
            const colors = [
                  'pink',
                  'plum',
                  'powderblue',
                  'darkseagreen',
                  'gold',
                  'indianred',
                  'lightskyblue',
                  'navajowhite',
                  'palegreen',
                  'tomato'
            ]
            return (
                  <tr className="color-palette-left-row">
                        {colors.map((color, idx) => {
                              return (
                                    <ColorPaletteItem color={color} key={idx.toString()} selectColor={this.props.selectColor} boardObject={this.props.boardObject} />
                              )
                        })}
                  </tr>
            )
      }
}

export default ColorPaletteLeft;
