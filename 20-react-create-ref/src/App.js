import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.inputElement = React.createRef();
   
    // setTimeout(() => this.inputElement.current.focus(),2000);
  }


  componentDidMount(){
    debugger;
    this.inputElement.current.focus();
  }

  render() {
    return (
      <div className="App">
         <input type="text" ref={this.inputElement}></input>
      </div>
    );
  }
}

export default App;