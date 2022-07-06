

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
                  'purple'
            ]
            return (
                  <tr>
                        {colors.map((color, idx) => {
                              return (
                                    <ColorPaletteItem color={color} key={idx.toString()} />
                              )
                        })}
                  </tr>
            )
      }
}

export default ColorPaletteLeft;
