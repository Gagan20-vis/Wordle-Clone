import React, { useContext } from 'react'
import wordContext from '../context/wordContext'
export default function GameOver() {
    const context = useContext(wordContext);
    const {gameOver,currAttempt,correctWord} = context;
    return (
        <div className='gameOver'>
            <h1>{gameOver.guessedWord ? "You Correctly guessed!" : "You Failed"}</h1>
            <h1>Correct : {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}
