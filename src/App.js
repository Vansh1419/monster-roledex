import './App.css';
import CardList from './components/card-list/card-list.component';
import { Component } from 'react';
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
        <input
          type="search"
          className='search-box'
          placeholder='Search here'
          onChange={onSearch}
        />
        {
          // filteredMonsters.map((monster) => {
          //   return (<div key={monster.id}>
          //     <h1>
          //       {monster.name}
          //     </h1>
          //   </div>)
          // })
        }
        <CardList monsters={filteredMonsters} />
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
