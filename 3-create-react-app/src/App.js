import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// function One(){
//   return <div>HAHAHHA</div> ;
// }

// class Car extends React.Component {
//   render(){
//     return <h1>Hihihihihih</h1> ;
//   }
// }

function NumberOne(props){
  return (
    <div>
      <h1>{ props.tieude }</h1>
    </div>
  )
}

class NumberTwo extends Component{
  render(){
    return (
      <h1>{ this.props.tieude} </h1>
      <img  scr={ this.props.linkanh }></img>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div className="row">
            <NumberOne tieude="KAKAKA"/>
            <NumberTwo tieude="KAKAKA"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
