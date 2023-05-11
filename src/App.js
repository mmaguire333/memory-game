import { useState } from 'react';
import Header from './Components/Header';
import Scoreboard from './Components/Scoreboard';
import CardContainer from './Components/CardContainer';
import GameOver from './Components/GameOver';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const updateScore = () => {
    setCurrentScore(currentScore + 1);

    if(currentScore >= highScore) {
      setHighScore(highScore + 1);
    }
  }

  const resetCurrentScore = () => {
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Header></Header>
      <Scoreboard currentScore={currentScore} highScore={highScore}></Scoreboard>
      <CardContainer updateScore={updateScore} resetCurrentScore={resetCurrentScore}></CardContainer>
      <GameOver></GameOver>
    </div>
  );
}

export default App;
