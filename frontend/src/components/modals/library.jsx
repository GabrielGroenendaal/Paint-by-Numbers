import React from "react";
import LibraryItemContainer from "./library_item_container";
const SamplePuzzle1 = {
    size: "15x15",
    tileData: "_#877c81|false_#e8cca8|true_#efd2aa|false_#eacea9|true_#e8cca7|true_#ebcda9|true_#ebd0a7|true_#f0d4af|true_#f2d6b2|true_#f1d5b1|true_#f4d8b3|true_#eed2ae|true_#e0c8a2|true_#dec6a0|true_#dac49d|true_#898888|false_#ecd4b0|true_#f3e1c5|true_#fee4d2|true_#fbe9cf|true_#696e6e|false_#706f62|false_#eaceaa|true_#f8e6cc|true_#f4e1c6|false_#f4e3c3|true_#e9d2ae|true_#e5cda9|true_#e9d0b1|true_#e0ceaa|true_#e9e8d7|true_#e7d5bb|true_#f0d9b6|true_#8d9691|false_#dcdfcf|false_#e6e1d7|true_#b5bec1|false_#efd3af|true_#f7e5cb|true_#f6e4c8|true_#f5e3c9|true_#efd9c2|true_#e3cba9|true_#e1c8a5|true_#dcc6a3|true_#9ea2a0|false_#7c6d6e|false_#fbe9cf|true_#7f7b85|false_#344762|false_#303956|false_#fdebd8|true_#696974|false_#f3e1c7|true_#eddbc1|true_#e9d2b4|true_#dec69e|true_#dcc49f|true_#e4c9a5|true_#e0c5a4|true_#d5bc9f|true_#f2e0c6|true_#f5e2c3|true_#2c4157|false_#276286|false_#303850|false_#b4aea2|false_#909f9c|false_#b3b0a3|false_#ecd9c2|true_#f7e5cb|true_#e7dcc3|true_#e6d1b2|true_#dcc5a7|true_#dac8a8|true_#e8d6bc|true_#bad0c3|false_#ccceba|false_#e9f4ff|false_#cbd1c9|false_#3e5f7b|false_#ecdac3|true_#ebe5d1|true_#f4e1ca|true_#ecdac0|true_#f3e1c7|true_#f4e2ca|true_#f1dfc5|true_#e6d4ba|true_#deccb2|true_#bdd3c0|false_#6f7e7d|false_#3f444f|false_#404e70|false_#61675f|false_#3b596b|false_#f1ddc4|true_#e9d7bd|true_#eedcc2|true_#f1dfc5|true_#e2d0b6|true_#e5d4b5|true_#ead8be|true_#e8d6bc|true_#e6d6ba|true_#325a7c|false_#234053|false_#d0cac0|false_#acb9b3|false_#fff8fb|true_#243a57|false_#e9d4ba|true_#eddcc2|true_#eddbc1|true_#e9d7bd|true_#e4d3b9|true_#e6d5bb|true_#e4d2b8|true_#aeb5a5|false_#6c7b77|false_#b4c5b3|false_#2b3e4e|false_#273650|false_#293a55|false_#f5e9d1|true_#dadbd0|false_#c1b39a|true_#e3d3bb|true_#d6c6aa|false_#e5d2b8|true_#d8ccae|true_#bcb198|true_#566572|false_#efddc3|true_#4a7383|false_#c6bc9c|false_#aea689|false_#404f54|false_#1e3d54|false_#f5e4ca|true_#f6e5cb|true_#20374a|false_#908a7f|false_#8d8477|false_#96867c|false_#887e77|false_#8a7d73|false_#f0ddc1|true_#4a6699|false_#415157|false_#2e4860|false_#d8e0e2|false_#f1ebd7|true_#f3e1c7|true_#90998e|false_#fde8cb|true_#faf0d3|false_#736e5a|false_#ebcb94|false_#324263|false_#f1dab5|false_#ebe0cb|false_#26546f|false_#c9cbb6|false_#b4c0b2|false_#babeb0|false_#b7c1b3|false_#7d9392|false_#98a59f|false_#ebdac0|true_#4a5565|false_#041930|false_#2e616e|false_#d4d3bd|false_#9da38f|false_#f7ddc4|true_#eae0c7|false_#30617d|false_#b2c5bb|false_#658591|false_#c3d7d4|false_#919197|false_#bac8bb|false_#576c79|false_#bfbeac|false_#f3e2c2|true_#eccfb0|true_#ebe7cf|false_#d4d9c1|false_#ffdec4|true_#283f55|false_#2f496a|false_#e2d4ba|true_#2b6480|false_#313d5e|false_#183c5b|false_#313b5d|false_#4f4f5b|false_#bdcdcb|false_#596472|false_#818d94|false_#3f6888|false_#9f9d9a|false_#e0c5a0|true_#e8d7bc|false_#7f828c|false_#e4d6bc|true_#34485b|false_#407393|false_#3d647d|false_#27344c|false_#34455a|false_#35546a|false_#eadedc|true_#e2dacc|true_#171f48|false_#aeafa6|false_#f0e0d0|true_#748b8d|false_#dfd9bb|false_#a8c1b2|false_#c5c5ae|false_#bfbfa7|false_#aab2a5|false_#a2b0a8|false",
    progressData: "_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_true|false_false|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_false|false_false|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_true|false_true|false_true|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_true|false_false|false_true|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false"
}

const SamplePuzzle2 = {
    size: "10x10",
    tileData: "_gray|false_gray|true_gray|false_gray|true_gray|true_gray|true_gray|false_gray|true_gray|false_gray|false_gray|false_gray|false_gray|false_gray|true_gray|false_gray|true_gray|false_gray|true_gray|false_gray|true_gray|false_gray|true_gray|true_gray|true_gray|false_gray|true_gray|false_gray|false_gray|false_gray|false_gray|true_gray|true_gray|true_gray|false_gray|false_gray|true_gray|false_gray|false_gray|false_gray|false_gray|false_gray|false_gray|false_gray|true_gray|true_gray|true_gray|true_gray|true_gray|false_gray|false_gray|false_gray|false_gray|true_gray|false_gray|true_gray|true_gray|false_gray|false_gray|false_gray|false_gray|false_gray|true_gray|true_gray|true_gray|true_gray|true_gray|false_gray|false_gray|true_gray|false_gray|false_gray|false_gray|false_gray|true_gray|false_gray|true_gray|true_gray|true_gray|true_gray|false_gray|true_gray|false_gray|true_gray|false_gray|false_gray|true_gray|false_gray|false_gray|false_gray|true_gray|false_gray|true_gray|false_gray|false_gray|false_gray|true_gray|false_gray|true_gray|false_gray|false",
    progressData: "_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_false|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_true|false_false|false_false|false_false|false_true|false_false|false_true|false_true|false_false|false_false|false_true|false_false|false_true|false_true|false_true|false_true|false_false|false_true|false_false|false_false|false_true|false_true|false_false|false_true|false_true|false_false|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_true|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false"
}

const SamplePuzzle3 = {
    size: "15x15",
    tileData: "_#000000|true_#000000|true_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#80802a|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#e6e076|false_#7e862d|true_#b2b618|false_#fff463|false_#000000|true_#fff463|false_#000000|true_#fff463|false_#fff463|false_#7e862d|true_#000000|true_#000000|true_#000000|true_#000000|true_#7d852d|true_#d9d465|false_#e6e076|false_#fff463|false_#ffffff|false_#ffffff|false_#ffffff|false_#ffffff|false_#ffffff|false_#fff463|false_#7e862d|true_#000000|true_#000000|true_#fff463|false_#000000|true_#000000|true_#e6e076|false_#e6e076|false_#fff463|false_#ffffff|false_#ffffff|false_#ffffff|false_#f9f9f9|false_#ffffff|false_#fff463|false_#000000|true_#000000|true_#fff463|false_#000000|true_#000000|true_#000000|true_#e6e076|false_#e6e076|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#78812b|true_#000000|true_#fff463|false_#000000|true_#000000|true_#000000|true_#7e862d|true_#919107|true_#fff463|false_#fff463|false_#692d31|true_#ffffff|false_#ffffff|false_#fff463|false_#b2b618|false_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#e6e076|false_#d5d051|false_#fff463|false_#996566|true_#692d31|true_#fff463|false_#fff463|false_#fff463|false_#ffffff|false_#48461c|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#ffffff|false_#e6e076|false_#b2b618|false_#fbca80|false_#fff463|false_#fff463|false_#fff463|false_#fff463|false_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#b2e2f9|false_#ffffff|false_#8a8a8a|false_#ffffff|false_#ffffff|false_#ffffff|false_#ffffff|false_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#d8cf54|false_#80441d|true_#b26e2d|true_#b26e2d|true_#b26e2d|true_#b26e2d|true_#b26e2d|true_#b26e2d|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#fff463|false_#0e0804|true_#b26e2d|true_#000000|true_#000000|true_#b26e2d|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#686328|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true_#000000|true",
    progressData: "_false|false_false|false_true|false_true|false_true|false_true|false_true|false_false|false_true|false_false|false_true|false_true|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_true|false_true|false_true|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_true|false_true|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_true|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false_false|false"
}

class Library extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            saved_puzzles: [],
            made_puzzles: []
        }
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchUserPuzzles(this.props.currentUser.id).then((response) => {
                console.log(response)
                let puzzles = response.puzzles.data;
                let new_puzzles = []
                puzzles.forEach(puzzle => {
                    let puzzle_datum = {
                        id: puzzle._id,
                        size: puzzle.size,
                        tileData: puzzle.tile_data
                    }
                    new_puzzles.push(puzzle_datum)
                })
                this.setState({
                    made_puzzles: new_puzzles
                })
            })
        }
    }

    render() {
        console.log(this.state)

        return (
            <div className="modal-instruction-background" onClick={() => this.props.closeModal()}>
                <div className="modal-instruction-child" id="library-modal-child">
                    <div className="instruction-form" id="library-modal">
                        <form className="manual" id="library" onClick={e => e.stopPropagation()}>
                            <div className="close-button library-close-button">
                                <div className="actual-close-button" onClick={() => this.props.closeModal()}>
                                    X
                                </div>
                            </div>
                            <div className='login-message'> Puzzles You've Saved</div>
                            <div className="manual-title">------- Click to Open -------</div>
                            <div className="saved-puzzles">
                                <LibraryItemContainer type={"saved"} puzzle={SamplePuzzle1} />
                                <LibraryItemContainer type={"saved"} puzzle={SamplePuzzle2} />
                                <LibraryItemContainer type={"saved"} puzzle={SamplePuzzle3} />
                            </div>
                            <div className='login-message' id="library-item"> Puzzles You've Made</div>
                            <div className="manual-title">------- Click to Copy URL -------</div>
                            <div className="made-puzzles">
                                {this.state.made_puzzles.map((ele, idx) => {
                                    return (
                                        <LibraryItemContainer
                                            type="made"
                                            puzzle={ele}
                                            key={idx.toString()} />
                                    )
                                })}
                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Library;