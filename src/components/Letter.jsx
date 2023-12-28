import { useContext, useEffect } from 'react'
import wordContext from '../context/wordContext';

export default function Letter(props,key) {
  const { letterPos, attemptVal} = props;

  const context = useContext(wordContext);
  const { Grid, correctWord,currAttempt,setDisabledWords} = context;

  const letter = Grid[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.includes(letter)
  const letterState = currAttempt.attempt>attemptVal &&  (correct ? "correct" : almost ? "almost" : "error");
  useEffect(() => {
    if(letter!=="" && !correct && !almost) setDisabledWords((prev) => [...prev,letter]);
  },[currAttempt.attempt])
  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  )
}
