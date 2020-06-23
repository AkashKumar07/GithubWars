import React from 'react';
import axios from 'axios';
import * as classes from './cards.module.css';
import Suggestions from '../../components/Suggestions/Suggestions';

class card extends React.Component {
    state={
        query: "",
        result: [],
        isHidden: false,
      }

    handleInputChange = () => {
      if(this.state.query.length >1){
        this.setState({isHidden: true})
      }else{
        this.setState({isHidden:false})
      }
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

      selectedSuggestion = (value) => {
        this.setState({
          query: value,
          result: []
        })
        this.props.setplayer(value);
      }
    
    render(){
        return(
            <div className={classes.card}>
              <div className={classes.image}>
                <img className={classes.mar} src={this.props.image}/>
              </div>
                <h4>{this.props.player}</h4>
                <p>Github Username</p>
                <div className={classes.dropdown}> 
                    <input
                         placeholder="Search..."
                         ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        value={this.state.query}
                    />
                    {this.state.isHidden ? <Suggestions click={this.selectedSuggestion} results={this.state.result}/> : null}
                </div>
            </div>
        )
    }
}

export default card;