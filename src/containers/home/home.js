import React from 'react';
import * as classes from './home.module.css';
import player1 from '../../assets/player1.png';
import player2 from '../../assets/player2.png';
import Card from '../cards/cards';

class home extends React.Component {
    render(){
        return(
            <div className={classes.home}>
                <Card player="Player 1" image={player1}/>
                <Card player="Player 2" image={player2}/>
            </div>
        )
    }
}

export default home;