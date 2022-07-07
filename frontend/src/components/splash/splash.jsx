import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Game from '../game/game.jsx';
import PuzzleCreate from '../game/puzzle_container';
class Splash extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Paint by numbers</h1>
                <NavBarContainer/>
                <Game />
                <PuzzleCreate/>
                
                
                
            </div>
        )
    }
}

export default Splash; 