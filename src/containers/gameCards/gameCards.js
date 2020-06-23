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
          {this.props.winner? <div className={classes.winner}>WINNER</div> : null}
            <div className={winClass.join(" ")}>
              <div className={classes.image}>
                <img src={this.props.image}/>
              </div>
              <div className={classes.heading}><span className={classes.username}>@{this.props.username}</span> <span className={classes.nameVal}>{this.props.name}</span></div>
              <div className={classes.para}>
                  <p><span className={classes.titles}>Forks</span> <span className={classes.forkVal}>{this.props.forks}</span></p>
                  <p><span className={classes.titles}>Repositories</span> <span className={classes.repoVal}>{this.props.repos}</span></p>
                  <p><span className={classes.titles}>Total Stars</span>  <span className={classes.starsVal}>{this.props.stars}</span></p>
              </div>
            </div>
        </div>
        )
    }
}

export default game;