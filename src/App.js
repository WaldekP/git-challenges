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
        <div>Yet another stuff added</div>
      <div>Change only for branch git-mistakes</div>
        <div>Yet another changes</div>
        <div>This is sth, which was added to master instead of git mistakes branch</div>
        <div>Hello from git mistakes</div>

            <div>Some change from github</div>

        <div>Just hello</div>
        <div>Something new</div>
        <div>Something extra new</div>
        <div>Change 1</div>
        <div>Change 2</div>
    </div>
  );
}


export default App;
