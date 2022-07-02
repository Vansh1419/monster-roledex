import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: { firstName: 'vansh', lastName: 'jain' }
      , adress: 'nanak nagar'
      , roll: '662'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HI {this.state.name.firstName} {this.state.name.lastName},Work at {this.state.adress}
          </p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: { firstName: 'rohit', lastName: 'gupta' }
              }
            },
              () => {
                console.log(this.state) //This only runs when state is fully updated
              })
          }}>
            Change name
          </button>
        </header>
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
