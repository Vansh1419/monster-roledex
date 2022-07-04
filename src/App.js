import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
// import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('') //[value, setValue]
  const [monsters, setMonsters] = useState([])
  useEffect(() => {
    // Contain the effect we want to do
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [
    // contains dependies
  ])
  console.log(searchField);
  const onSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField)
  })
  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className={'monster-search-box'}
        placeholder={'Search a Monster'}
        onChangeHandler={onSearch}
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>
  )
}
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {
//         this.setState(() => {
//           return { monsters: users }
//         })
//       }
//       )
//   }
//   onSearch = (event) => {
//     const searchField = event.target.value.toLowerCase()

//     this.setState(() => {
//       return { searchField }
//     })
//   }
//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearch } = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           className={'monster-search-box'}
//           placeholder={'Search Monster'}
//           onChangeHandler={onSearch}
//         />
//         <CardList
//           monsters={filteredMonsters}
//         />
//       </div>
//     );
//   }
// }


export default App;
