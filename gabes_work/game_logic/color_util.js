import Util from "./util";


const ColorUtil = {

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
      },

      rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      },

      nameToHex(str) {
            let ctx = document.createElement('canvas').getContext('2d')
            ctx.fillStyle = str;
            return ctx.fillStyle
      },

      hexToRGB(rgb) {
            // Choose correct separator
            var hex = "#ff64c8";
            var red = parseInt(hex[1]+hex[2],16);
            var green = parseInt(hex[3]+hex[4],16);
            var blue = parseInt(hex[5] + hex[6], 16);
            return {
                  r: red,
                  g: green,
                  b: blue
            }      
      },



      // The big Guns

      seedBombsByColor(board) {
            let checkTiles = Util.convertBoardToString(board)
            let checkTilesOverall = Util.parseTileDataFromString(checkTiles)
            let r, g, b;
            checkTilesOverall.forEach(tile => {
                  let hex = this.hexToRGB(tile[0])
                  console.log(hex)
                  r += hex.r
                  g += hex.g
                  b += hex.b
            })
            let avg = this.averageColor(r, g, b, checkTiles.length);
            console.log(avg)
      },

      averageColor(r, g, b, num) {
            return {
                  r: Math.sqrt(r / num),
                  g: Math.sqrt(g / num),
                  b: Math.sqrt(b / num)
            }
      }



}

export default ColorUtil;