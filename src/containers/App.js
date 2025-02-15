import React, {Component} from  'react';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component{

    constructor(){
        super();
        this.state={
            "robots":[],
            "searchField":''
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({"robots":users}))
}

    onSearchChange=(event)=>{
        this.setState({"searchField":event.target.value});
        
        
    }
       render(){
        const filteredRobots = this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
        if(this.state.robots.length === 0){
            return <h2>Loading</h2>
        }
        else{
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                </div>
               );

        }
          
                

       }
        
            
            
        
       
}

export default App;