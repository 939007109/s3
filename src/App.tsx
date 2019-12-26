import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + TypeScript + Github Actions + S3 Build</p>
      </header>
    </div>
  );
}

export default App;
