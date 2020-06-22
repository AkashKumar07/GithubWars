import React from 'react';
import axios from 'axios';
import * as classes from './cards.module.css';
import Suggestions from '../../components/Suggestions/Suggestions';

class card extends React.Component {
    state={
        query: "",
        result: [],
    }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            this.getInfo()
          } 
        })
      }

     getInfo = () => {
        const query=this.state.query
        axios.get("https://api.github.com/search/users?q="+query)
          .then(({ data }) => {
            const result = data.items.slice(0,4);
            this.setState({
              result: result
            })
          })
      }
    
    render(){
        return(
            <div className={classes.card}>
                <img src="https://www.bigcheesebadges.co.uk/images/player_1.png"/>
                <h4>player name</h4>
                <p>Github Username</p>
                <form>
                    <input
                         placeholder="Search for..."
                         ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    >
                    
                    </input>

                    <Suggestions results={this.state.result}/>
                </form>
            </div>
        )
    }
}

export default card;