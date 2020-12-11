import React from 'react';
import logo from './logo.svg';
import './App.css';


class AppsCLASSProps extends React.Component {
  constructor(props) {
    super(); // 😬 We forgot to pass props
    console.log("props::",props);      // ✅ {}
    console.log("this.props::", this.props); // 😬 undefined 
  }
  render() {
    return <div>Hello AppsCLASSProps</div>;
  }
  // ...
}

class AppsCLASSsuperProps extends React.Component {
  constructor(props) {
    super(props); // 😬 We forgot to pass props
    console.log("props::",props);      // ✅ {}
    console.log("this.props::", this.props); // 😬 undefined 
  }
  render() {
    return <div>Hello AppsCLASSsuperProps</div>;
  }
  // ...
}

class AppsNoConstructor extends React.Component {
  render() {    // ✅ {}
    console.log("this.props::", this.props); // 😬 undefined 
    return <div>Hello AppsNoConstructor</div>;
  }
  // ...
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppsNoConstructor;
