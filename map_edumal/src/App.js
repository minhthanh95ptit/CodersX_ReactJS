import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const so = [1,2,3,4,5];
// const so2 = so.map((x) => x*2 + ",");

const so3 = so.map((x) => (
    <li>So: {x}</li>
));

class App2 extends Component{
  render(){
    return (
      <div>
        {so3}
      </div>
    )

  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <App2 />
      </header>
    </div>
  );
}

export default App;
