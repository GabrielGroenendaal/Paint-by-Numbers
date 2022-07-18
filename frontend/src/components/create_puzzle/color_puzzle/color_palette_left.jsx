

import React from "react";
import ColorPaletteItem from "./color_palette_item";
import ColorUtil from "../../game_logic/color_util";

class ColorPaletteLeft extends React.Component {
      constructor(props) {
            super(props)
      }

      
      render() {
            let colors = [
                  'pink',
                  'plum',
                  'powderblue',
                  'darkseagreen',
                  'gold',
                  'indianred',
                  'lightskyblue',
                  'navajowhite',
                  'palegreen',
                  'tomato',
                  "black      "
            ]
            colors = colors.map(color => ColorUtil.nameToHex(color))
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
