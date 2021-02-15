import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {Searchbox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <Searchbox placeholder='Search monsters...' onChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;