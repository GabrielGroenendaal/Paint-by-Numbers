


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
      rotateClockwise(a) {
            var n=a.length;
            for (var i=0; i<n/2; i++) {
                for (var j=i; j<n-i-1; j++) {
                    var tmp=a[i][j];
                    a[i][j]=a[n-j-1][i];
                    a[n-j-1][i]=a[n-i-1][n-j-1];
                    a[n-i-1][n-j-1]=a[j][n-i-1];
                    a[j][n-i-1]=tmp;
                }
            }
            return a;
        }
}

module.exports = ColorUtil;