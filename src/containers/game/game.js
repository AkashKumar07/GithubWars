import React from 'react';

import GameCard from '../gameCards/gameCards';
import * as classes from  './game.module.css';
import Axios from 'axios';

class game extends React.Component{
    state= {
        playerOne: {
            avatar: null,
            username: null,
            name: '',
            repos: null,
            forks: null,
            stars: null
        },
        playerTwo: {
            avatar: null,
            username: null,
            name: '',
            repos: null,
            forks: null,
            stars: null
        },
        done: false
    }
    componentDidMount(){
        const p1=this.props.location.state.p1;
        const p2= this.props.location.state.p2;
        Axios.get("https://api.github.com/users/"+p1)
        .then(({data}) => {
            const username = data.login;
            let name = data.name;
            if(!name){
                name= ""
            }
            const repos = data.public_repos;
            const avatar = data.avatar_url
            const player1 = {
                ...this.state.playerOne,
                username: username,
                name: name,
                repos: repos,
                avatar: avatar
            };
            this.setState({playerOne: player1});
        }).catch(err => {
            console.log(err)
        })

        Axios.get("https://api.github.com/users/"+p1+"/repos")
        .then(({data}) => {
             let stars = 0;
             let forks = 0;
            data.map( data => {
                stars= stars + data.stargazers_count;
                forks = forks + data.forks;
                return 1;
            })
            const player1 = {
                ...this.state.playerOne,
                stars: stars,
                forks: forks
            }
            this.setState({playerOne: player1})
        }).catch(err => {
            console.log(err)
        })


        Axios.get("https://api.github.com/users/"+p2)
        .then(({data}) => {
            const username = data.login;
            let name = data.name;
            if(!name){
                name= ""
            }
            const repos = data.public_repos;
            const avatar= data.avatar_url;
            const player2 = {
                ...this.state.playerTwo,
                username: username,
                name: name,
                repos: repos,
                avatar: avatar
            }
            this.setState({playerTwo: player2});
        }).catch(err => {
            console.log(err)
        })


        Axios.get("https://api.github.com/users/"+p2+"/repos")
        .then(({data}) => {
             let stars = 0;
             let forks = 0;
            data.map( data => {
                stars= stars + data.stargazers_count;
                forks = forks + data.forks;
                return 1;
            })
            const player2 = {
                ...this.state.playerTwo,
                stars: stars,
                forks: forks
            }
            this.setState({playerTwo: player2})
        }).catch(err => {
            console.log(err)
        })

        this.setState({done: true});
    }

    restart = () => {
        this.props.history.push("/");
    }

    render(){
        let card = (<div className={classes.loader}></div>);
        let p1Score= 0;
        let p2Score= 0;
        let p1Wins = false;
        let p2Wins = false;

        if(this.state.playerOne.stars !== null && this.state.playerTwo.forks !==null
             && this.state.playerTwo.stars!==null && this.state.playerTwo.forks!==null){
                if(this.state.playerOne.repos > this.state.playerTwo.repos){
                    p1Score = p1Score + 1;
                }else if(this.state.playerOne.repos === this.state.playerTwo.repos){
                    p2Score = p2Score;
                    p1Score = p1Score
                }else if(this.state.playerOne.repos < this.state.playerTwo.repos){
                    p2Score = p2Score +1;
                }
        
                if(this.state.playerOne.stars > this.state.playerTwo.stars){
                    p1Score = p1Score + 1;
                }else if(this.state.playerOne.stars === this.state.playerTwo.stars){
                    p2Score = p2Score;
                    p1Score = p1Score
                }else if(this.state.playerOne.stars < this.state.playerTwo.stars){
                    p2Score = p2Score +1;
                }
                
                if(this.state.playerOne.forks > this.state.playerTwo.forks){
                    p1Score = p1Score + 1;
                }else if(this.state.playerOne.forks === this.state.playerTwo.forks){
                    p2Score = p2Score;
                    p1Score = p1Score
                }else if(this.state.playerOne.forks < this.state.playerTwo.forks){
                    p2Score = p2Score +1;
                }
        
                if(p1Score > p2Score){
                    p1Wins = true;
                }
                if(p2Score> p1Score){
                    p2Wins = true;
                }

                console.log("winner", p1Wins, p2Wins);

                card = (
                <div className={classes.home}>
                <GameCard 
                image={this.state.playerOne.avatar}
                name={this.state.playerOne.name}
                username={this.state.playerOne.username}
                winner={p1Wins}
                repos={this.state.playerOne.repos} 
                forks={this.state.playerOne.forks}
                stars={this.state.playerOne.stars}
                />
                <GameCard 
                image={this.state.playerTwo.avatar}
                name={this.state.playerTwo.name}
                username={this.state.playerTwo.username}
                winner={p2Wins}
                repos={this.state.playerTwo.repos} 
                forks={this.state.playerTwo.forks}
                stars={this.state.playerTwo.stars}
                />
                <button onClick={this.restart}>Start Again</button>
                </div>
                )
            }
        
        return(
            <div className={classes.home}>
                {card}
            </div>
        )
    }
}

export default game;