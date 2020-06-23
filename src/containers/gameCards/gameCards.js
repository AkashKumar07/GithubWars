import React from 'react';

import * as classes from './gameCards.module.css';

class game extends React.Component {
    render(){
      let winClass = [classes.card]
      if(this.props.winner){
        winClass.push(classes.win);
      }
        return(
        <div>
          {this.props.winner? <p className={classes.winner}>WINNER</p> : null}
            <div className={winClass.join(" ")}>
              <div className={classes.image}>
                <img src={this.props.image}/>
              </div>
              <p><span className={classes.username}>@{this.props.username}</span> <span className={classes.nameVal}>{this.props.name}</span></p>
              <div className={classes.para}>
                  <p>Forks <span className={classes.forkVal}>{this.props.forks}</span></p>
                  <p>Repositories <span className={classes.repoVal}>{this.props.repos}</span></p>
                  <p>Total Stars  <span className={classes.starsVal}>{this.props.stars}</span></p>
              </div>
            </div>
        </div>
        )
    }
}

export default game;