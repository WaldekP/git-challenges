import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from "./components/testComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git mistakes
        </a>
      </header>
        <TestComponent />
        <div>Yet another stuff added ssdsd</div>
    </div>
  );
}

export default App;
