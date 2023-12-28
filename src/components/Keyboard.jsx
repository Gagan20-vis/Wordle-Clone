import React, { useCallback, useContext, useEffect } from 'react'
import Key from './Key';
import wordContext from '../context/wordContext';

export default function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const context = useContext(wordContext);
  const { onEnter, onSelectLetter, onDelete, disabledWords,gameOver } = context;
  const handleKeyboard = useCallback((e) => {
    if(gameOver.gameOver) return ;
    if (e.key === 'Enter') {
      onEnter();
    }
    else if (e.key === 'Backspace') {
      onDelete();
    }
    else {
      keys1.forEach(key => {
        if (e.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      });
      keys2.forEach(key => {
        if (e.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      });
      keys3.forEach(key => {
        if (e.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      });
    }
  })
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])
  return (
    <div className='keyboard'>
      <div className="line1">{keys1.map((key, ind) => {
        return <Key key={ind} keyVal={key} disabled={disabledWords.includes(key)}/>
      })}</div>
      <div className="line2">{keys2.map((key, ind) => {
        return <Key key={ind} keyVal={key} disabled={disabledWords.includes(key)} />
      })}</div>
      <div className="line3">
        <Key keyVal={"Enter"} big />
        {keys3.map((key, ind) => {
          return <Key key={ind} keyVal={key} disabled={disabledWords.includes(key)} />
        })}
        <Key keyVal={"Delete"} big />
      </div>
    </div>
  )
}
