import React from "react";
import LibraryItemContainer from "./library_item_container";
import LibrarySavedItemContainer from "./library_saved_item_container";
import Util from "../../game_logic/util";


class Library extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            saved_puzzles: [],
            made_puzzles: [],
            tab: 1
        }
    }

    componentDidMount() {
        if (this.props.currentUser) {

            this.props.fetchUserPuzzles(this.props.currentUser.id).then((res1) => {
                if (res1) {
                    let puzzles = res1.puzzles.data;
                    let new_puzzles = []

                    puzzles.forEach(puzzle => {
                        
                        let puzzle_datum = {
                            id: puzzle._id,
                            size: puzzle.size,
                            tileData: puzzle.tile_data,
                            creator_id: puzzle.creator_id
                        }
                        new_puzzles.push(puzzle_datum)
                        this.setState({
                            made_puzzles: new_puzzles
                        })
                    })

                }

            }).catch(err => console.log(err))
                this.props.fetchUserProgresses(this.props.currentUser.id)
                .then((res2) => {
                    if (res2) {
                        let progresses = res2.progresses.data;
                        let new_progress = []
                        progresses.forEach(progress => {
                            // console.log(progress)
                            this.props.fetchPuzzle(progress.puzzle_id).then((res3) => {
                                if (res3.puzzle.data) {
                                    let progress_datum = {
                                        id: progress._id,
                                        puzzle_id: progress.puzzle_id,
                                        user_id: progress.user_id,
                                        tileData: res3.puzzle.data.tile_data,
                                        progress: progress.progress_data,
                                        size: res3.puzzle.data.size,
    
                                    };
                                    new_progress.push(progress_datum)
                                    this.setState({
                                        saved_puzzles: new_progress
                                    })
                                }
     
                            })


                        })

                    }


                }).catch(err => console.log(err))

            



            


        }
        
    }


    savedPuzzles() {
        console.log(this.state.saved_puzzles)

        return (
            <div className="saved-puzzles-container">
                <div className='login-message'> Puzzles You've Saved</div>
                <div className="library-manual-title">------- Click to Open -------</div>
                <div className="saved-puzzles">
                    <div className="library-items">
                        {this.state.saved_puzzles.map((ele2, idx) => {
                            
                                return <LibrarySavedItemContainer
                                type={"saved"}
                                savedPuzzle={ele2}
                                key={idx.toString()}
                            />
                            
               

                        })}
                        <div className="library-separator"></div>
                    </div>
                </div>
            </div>

        )
    }

    madePuzzles() {

        return (
            <div className="made-puzzles-container">
                <div className='login-message' id="library-item"> Puzzles You've Made</div>
                <div className="manual-title">------- Click to Copy URL -------</div>
                <div className="made-puzzles">
                    <div className="library-items">
                        {
                            this.state.made_puzzles.map(
                                (ele, idx) => {
                                   
                                        return (
                                            <LibraryItemContainer
                                                type="made"
                                                puzzle={ele}
                                                key={idx.toString()}
                                            />
                                        )
                                    
                                   
                            
                                }
                            )
                        }
                        {/* {this.state.made_puzzles.map((ele, idx) => {
                            
                            return (
                                <LibraryItemContainer
                                    type="made"
                                    puzzle={ele}
                                    key={idx.toString()} />
                            )
                        })} */}
                        <div className="library-separator"></div>
                    </div>


                </div>
            </div>


        )
    }

    

    handleClick(event) {
        event.preventDefault()
        let text = event.currentTarget.outerText;
        if (text === 'CREATED') {
            this.setState({
                tab: 2
            })
        } else {
            this.setState({
                tab: 1
            })
        }
        // console.log(text)
    }
    render() {
        let component = (this.state.tab === 1) ? this.savedPuzzles() : this.madePuzzles();
        return (
            <div className="library-instruction-background" onClick={() => this.props.closeModal()}>
                <div className="library-instruction-child" id="library-modal-child">
                    <div className="library-form" id="library-modal">
                        <form className="library-manual" id="library" onClick={e => e.stopPropagation()}>
                            <div className="close-button library-close-button">
                                <div className="actual-close-button" onClick={() => this.props.closeModal()}>
                                    X
                                </div>
                            </div>
                            <div className="library-tab">
                                <div className="library-tab-item" onClick={this.handleClick.bind(this)}>
                                    SAVED
                                </div>
                                <div className="library-tab-item" onClick={this.handleClick.bind(this)}>
                                    CREATED
                                </div>
                            </div>

                            {component}

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Library;