import { useContext } from 'react'
import './App.css'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import Navbar from './components/Navbar'
import wordContext from './context/wordContext'
import GameOver from './components/GameOver'
function App() {
  const context = useContext(wordContext);
  const {gameOver} = context;
  return (
    <div className='App'>
      <Navbar />
      <div className="game">
        <Grid />
        {gameOver.gameOver ? <GameOver/> : <Keyboard />}
      </div>
    </div>
  )
}
export default App
