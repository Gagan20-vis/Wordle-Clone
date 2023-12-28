import React, { useContext } from 'react'
import wordContext from '../context/wordContext';

export default function Key(props, key) {
  const { keyVal, big, disabled } = props;
  const context = useContext(wordContext);
  const { onEnter, onSelectLetter, onDelete,gameOver} = context;
  const selectLetter = () => {
    if(gameOver.gameOver) return ;
    if (keyVal === 'Enter') {
      onEnter();
    }
    else if (keyVal === 'Delete') {
      onDelete();
    }
    else {
      onSelectLetter(keyVal);
    }
  }
  return (
    <div className='key' id={big ? 'big' : disabled && 'disabled'} onClick={selectLetter}>{keyVal}</div>
  )
}
