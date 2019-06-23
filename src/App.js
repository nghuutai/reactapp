import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App1 extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.ten}</h2>
      </div>
    );
  }
}

function Hello(props){
  return(
    <div>
      <h1>Tôi là {props.name}</h1>
    </div>
  )
}
const a = "K39A"
class Info extends Component {
  render() {
    return (
      <div>
        <h1>Tôi học lớp {a}</h1>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div>
        <label className="custom-control custom-checkbox">
        <input type="checkbox" name id defaultValue="checkedValue" className="custom-control-input" />
        <span className="custom-control-indicator" />
        <span className="custom-control-description" />
      </label>
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>xin chao</h1>
        <App1 ten="huu tai"/>
        <Hello name="Nguyễn Văn Truyền"/>
        <Hello name="Nguyễn Hữu Tài"/>
        <Info/>
        <Form/>
      </div>
    );
  }
}





export default App;
