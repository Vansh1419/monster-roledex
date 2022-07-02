import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
    console.log(1);
  }
  componentDidMount() {
    console.log(3);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(() => {
          return { monsters: users }
        },
          () => {
            console.log(this.state);
          }
        )
      }
      )
  }
  render() {
    console.log(2);
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>
                {monster.name}
              </h1>
            </div>
          })
        }
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
