import React from "react";
import Pixelify from "./pixel";
import ColorUtil from "../../game_logic/color_util";

class ImageOptions extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  pictureURL: '',
                  picture: null,
                  storedPicture: null
            }
      }

      componentDidUpdate() {
            if (document.getElementById('hiddenPixels') && this.state.picture) {
                  let tile_data = ColorUtil.convertImageToPixels(this.props.board.dimensions[0])
                  this.props.submitImage(tile_data, this.state.pictureURL)
                  this.toggleImage()
                  console.log("apple")
            }
      }
 
      toggleImage() {
            this.setState({ picture: null })
      }

      handleSubmit(event) {
            event.preventDefault()
            let component = <Pixelify
                              src={this.state.pictureURL}
                              width={550}
                              height={550}
                              pixelSize={550 / this.props.board.dimensions[0]}
                              centered={true}
                              fillTransparencyColor={'black'}
                              />
            this.props.submitImageForCheck(component)

                  this.setState({
                        picture: true,
                        storedPicture: component
                  })
            setTimeout(() => {
                  this.setState({
                        picture: true,
                        storedPicture: component
                  })
            }, 50);
      }

      update(field) {
            return e => this.setState({
                  [field]: e.currentTarget.value
            })
      }

      render() {

            return (
                  <div className="puzzle-gameplay-options-container">
                  <form onSubmit={this.handleSubmit.bind(this)}>
                        <label className="puzzle-image-options-header">IMAGE URL</label>
                        <input type="text" onChange={this.update('pictureURL')} value={this.state.pictureURL} />
                        <button type="submit" className="image-submit-button">UPLOAD</button>
                  </form>
            </div>
            )
      }
}

export default ImageOptions;