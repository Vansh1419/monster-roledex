import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [{
        name: 'Linda',
        id: 'jdaj23n'
      },
      {
        name: 'Frank',
        id: 'ejsoj32'
      },
      {
        name: 'Jacky',
        id: '2kd3emos3'
      },
      {
        name: 'Andrie',
        id: '2jeosed'
      }
      ]

    }
  }
  render() {
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
