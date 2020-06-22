import React from 'react';
import * as classes from './home.module.css';
import Card from '../cards/cards';

class home extends React.Component {
    render(){
        return(
            <div className={classes.home}>
                <Card />
            </div>
        )
    }
}

export default home;