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
      
      // onClick(event) {
      //       event.preventDefault()
      //       this.setState({
      //             picture: true,
      //             storedPicture:  <Pixelify
      //             src={'./components/create_puzzle/images/sample_images/doom.png'}
      //             width={550}
      //             height={550}
      //             pixelSize={550 / this.props.board.dimensions[0]}
      //             fillTransparencyColor={'black'}
      //       />
      //       })
      // }

      componentDidUpdate(prevProps) {

      }
 
      toggleImage() {
            this.setState({ picture: null })
      }

      handleSubmit(event) {
            event.preventDefault()
                  this.setState({
                        picture: true,
                        storedPicture:  <Pixelify
                                    src={this.state.pictureURL}
                                    width={550}
                                    height={550}
                                    pixelSize={550 / this.props.board.dimensions[0]}
                                    centered={true}
                                    fillTransparencyColor={'black'}
                  />
            })
      }

      update(field) {
            return e => this.setState({
                  [field]: e.currentTarget.value
            })
      }

      getFileURL(url) {
            
      }
      render() {
            if (document.getElementById('hiddenPixels') && this.state.picture) {
                  let tile_data = ColorUtil.convertImageToPixels(this.props.board.dimensions[0])
                  this.props.submitImage(tile_data, this.state.pictureURL)
                  this.toggleImage()
                  
            }
            let component = (this.state.storedPicture) ? this.state.storedPicture : null
            return (
                  <div className="puzzle-gameplay-options-container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                              <input type="text" onChange={this.update('pictureURL')} value={this.state.pictureURL} />
                              <button type="submit">Submit Image URL</button>
                        </form>
                        {this.state.storedPicture}
                  </div>
            )
      }
}

export default ImageOptions;