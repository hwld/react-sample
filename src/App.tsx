import React from 'react';
import './App.css';
import Game from 'components/Game';

const App: React.FC = () => {
  return (
    <div className="App">
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  );
};

export default App;
