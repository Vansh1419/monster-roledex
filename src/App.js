import './App.css';
import CardList from './components/card-list/card-list.component';
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(() => {
          return { monsters: users }
        })
      }
      )
  }
  onSearch = (event) => {
    const searchField = event.target.value.toLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }
  render() {
    const { monsters, searchField } = this.state
    const { onSearch } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className={'monster-search-box'}
          placeholder={'Search Monster'}
          onChangeHandler={onSearch}
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn hello
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
