import React from "react";

class Manual extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: "modal_content_one"
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        // console.log(e)
        return e => {
            this.setState({
                slide: e.currentTarget.value
            });
        }
    }

    topContent() {
        let text;
        switch (this.state.slide) {
            case 'modal_content_one':
                text = <div className="manual-text manual-top-text-1">
                    <div>
                        Paint by Numbers (Picross) is a game in which you solve puzzles using logic.

                    </div>
                    <div>
                        Fill in squares correctly to complete an illustration, and you may reveal an image!

                    </div>
                </div>
                break;
            case 'modal_content_two':
                text = <div className="manual-text manual-top-text-2">
                    <div>Reveal tiles by clicking on them! Click and drag to select multiple tiles at once, and press any key to clear your selection.</div>
                    <div>Hold ALT or OPTION when you click a tile to flag it instead, useful for marking tiles you think are empty!</div>

                </div>
                break;
            case 'modal_content_three':
                text = <div className="manual-text manual-top-text-3">
                    <div>The numbers above each column and left of each row are HINTS!</div>
                    <div>
                        <table className="board-container board-container-hintboard-example">
                            <tbody>
                                <tr className="board-row board-row-hintboard-example">
                                    <td class="number-hint-top-row hint-tile-15x15">
                                        <div className="number-hint-top-item">1</div>
                                        <div className="number-hint-top-item">3</div>

                                    </td>
                                    <td className="tile puzzle-tile-15x15 tile-unexplored">
                                        <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                        </div>
                                    </td>
                                    <td className="tile puzzle-tile-15x15 tile-unexplored">
                                        <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                        </div>
                                    </td>
                                    <td className="tile puzzle-tile-15x15 tile-unexplored">
                                        <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                        </div>
                                    </td>
                                    <td className="tile puzzle-tile-15x15 tile-unexplored">
                                        <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                        </div>
                                    </td>
                                    <td className="tile puzzle-tile-15x15 tile-unexplored">
                                        <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>


                    <div>Each hint corresponds to a sequence of consecutive tiles that are FILLED on that row or column.</div>
                </div>
                break;
            case 'modal_content_four':
                text = <div className="manual-text manual-top-text-2">
                    <div>You can generate a random puzzle OR receive a themed puzzle based on an image.</div>

                    <div className="manual-text-1-item-3">
                        <img id="manual-text-2-img" src={require('./assets/generate_sample.png')} alt="generate-button" />
                        <img id="manual-text-3-img" src={require('./assets/theme_sample.png')} alt="generate-button" />

                    </div>
                </div>
                break;
            default:
                text = <div></div>
        }
        return text;
    }

    render() {

        const modal_content_one = this.state.slide === "modal_content_one" ? (
            <div className="mpo-modal-slide content-1">
                <div className="mpo-modal-content">
                    <div className="modal-slider-text-one">
                        <div className="manual-title">------- How to Play -------</div>

                        <div className="manual-text manual-text-1">
                            <div className="manual-text-1-item-1">
                                Each puzzle is a grid where every tile is either FILLED or EMPTY!
                                <img id="manual-text-1-img" src={require('./assets/sample-puzzlle.png')} alt="tile keys" />

                            </div>
                            <div>To solve the puzzle, you must reveal all the FILLED tiles while revealing as few EMPTY tiles as possible!</div>
                            <div className="manual-text-1-item-2">
                                Puzzles can either be randomly generated, or based on an image that is revealed upon completion!
                            </div>
                            <div>
                                Click the navigation tabs below to learn more!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : ("");

        const modal_content_two = this.state.slide === "modal_content_two" ? (
            <div className="mpo-modal-slide content-2">
                <div className="mpo-modal-content">
                    <div className="manual-title">------- Tile Key -------</div>
                    <img src={require('./key-tiles-03-03.png')} alt="tile keys" />
                </div>
            </div>) : ("");

        const modal_content_three = this.state.slide === "modal_content_three" ? (
            <div className="mpo-modal-slide content-3">
                <div className="mpo-modal-content">
                    <div className="manual-text manual-text-3">
                        <div>
                            <table className="board-container board-container-hintboard-example">
                                <tbody>
                                    <tr className="board-row board-row-hintboard-example">
                                        <td class="number-hint-top-row hint-tile-15x15">
                                            <div className="number-hint-top-item">1</div>
                                            <div className="number-hint-top-item">3</div>

                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-explored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-bomb">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15 tile-bomb">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-explored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-explored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-explored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    1 corresponds to the first FILLED tile on that row.

                                </li>
                                <li>
                                    3 corresponds to the last three tiles of the row.

                                </li>
                                <li>
                                    Because the "1" and "3" are separate sequences, we know there must be an EMPTY tile in between them.

                                </li>

                            </ul>
                        </div>

                        <div>
                            When a hint's corresponding tiles are revealed, they are crossed out.
                        </div>
                        <div>
                            <table className="board-container board-container-hintboard-example">
                                <tbody>
                                    <tr className="board-row board-row-hintboard-example">
                                        <td class="number-hint-top-row hint-tile-15x15">
                                            <div className="number-hint-top-item hint-crossout">1</div>
                                            <div className="number-hint-top-item hint-crossout">1</div>

                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-unexplred">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-unexplored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-explored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-unexplored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                        <td className="tile puzzle-tile-15x15 tile-explored">
                                            <div className="tile-overlay puzzle-tile-overlay puzzle-tile-overlay-15x15">
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>) : ("");

        const modal_content_four = this.state.slide === "modal_content_four" ? (
            <div className="mpo-modal-slide content-4">
                <div className="mpo-modal-content">
                    <div className="manual-title">------- Tips -------</div>
                    <div className="tips-list-text">
                        <div className="tips-number-container">
                            <label className="tips-number">1</label>
                            <ul> Use option-click to flag tiles.</ul>
                        </div>
                        <div className="tips-number-container">
                            <label className="tips-number">2</label>
                            <ul> Complete the larger numbers  <br />  first.</ul>
                        </div>
                        <div className="tips-number-container">
                            <label className="tips-number">3</label>
                            <ul> Work from the edges inward using</ul>
                        </div>
                    </div>
                </div>
            </div>) : ("");

        return (
            <div className="modal-instruction-background-left">
                <div className="modal-instruction-child-left">
                    <div className="instruction-form">
                        <form className="manual-instruction" onClick={e => e.stopPropagation()} >
                            <br />
                            <div className="close-button-manual" onClick={() => this.props.closeModal()}>
                                <div className="actual-close-button-manual" onClick={() => this.props.closeModal()}>
                                    X
                                </div>
                            </div>
                            <div className='manual-login-message'> PAINT BY NUMBERS</div>

            
                            {this.topContent()}



                            <div className="mpo-modal">
                                <input type="checkbox" id="mpo-modal-controller" className="mpo-modal-open" hidden />
                                <div className="mpo-modal-wrap">
                                    <label htmlFor="mpo-modal-controller" className="mpo-modal-overlay"></label>
                                    <div className="mpo-modal-body" >

                                        <input type="radio" name="content-nav" value={"modal_content_one"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_one")}
                                            checked={this.state.slide === "modal_content_one"} />


                                        <input type="radio" name="content-nav" value={"modal_content_two"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_two")}
                                            checked={this.state.slide === "modal_content_two"} />


                                        <input type="radio" name="content-nav" value={"modal_content_three"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_three")}
                                            checked={this.state.slide === "modal_content_three"} />

                                        <input type="radio" name="content-nav" value={"modal_content_four"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_four")}
                                            checked={this.state.slide === "modal_content_four"} />
                                        {modal_content_one}
                                        {modal_content_two}
                                        {modal_content_three}
                                        {modal_content_four}





                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        )
    }
}
export default Manual;