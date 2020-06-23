import React from 'react';
import * as classes from './home.module.css';
import player1 from '../../assets/player1.png';
import player2 from '../../assets/player2.png';
import Card from '../cards/cards';

class home extends React.Component {
    state ={
        player1: null,
        player2: null
    }
    
    player1 = (p1) => {
        this.setState({
            player1: p1
        })
    }

    player2 = (p2) => {
        this.setState({
            player2: p2
        })
    }
    
    buttonClicked = () => {
        this.props.history.push("/game", {p1: this.state.player1, p2: this.state.player2});
    }

    render(){
        let act = false;
        if(this.state.player1 && this.state.player2){
            act=true
        }else{
            act=false
        }
        return(
            <div className={classes.home}>
                <Card setplayer={this.player1} player="Player 1" image={player1}/>
                <Card setplayer={this.player2} player="Player 2" image={player2}/>
                <button onClick={this.buttonClicked} disabled={!act}>Start war</button>
            </div>
        )
    }
}

export default home;