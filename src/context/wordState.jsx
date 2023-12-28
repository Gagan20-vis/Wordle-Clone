import { useEffect, useState } from 'react'
import { gridDefault, generateWordSet } from '../Words'
import WordContext from './wordContext';
const wordState = (props) => {
    const [Grid, setGrid] = useState(gridDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledWords, setDisabledWords] = useState([]);
    const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false });
    const correctWord = 'RIGHT';
    const onEnter = () => {
        if (currAttempt.letterPos !== 5) {
            alert("Not Enough Letters")
            return
        }
        let currWord = Grid[currAttempt.attempt].join('');
        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
        }
        else {
            alert("Not in word list!")
        }
        if (currWord === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true });
            return;
        }
        if (currAttempt.attempt === 5) setGameOver({ gameOver: true, guessedWord: false });
    }
    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return;
        const newGrid = [...Grid];
        newGrid[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setGrid(newGrid);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
    }
    const onDelete = () => {
        if (currAttempt.letterPos == 0) {
            const newGrid = [...Grid];
            newGrid[currAttempt.attempt][currAttempt.letterPos - 1] = "";
            setGrid(newGrid);
            return;
        }
        const newGrid = [...Grid];
        newGrid[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setGrid(newGrid);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
    }
    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
        })
    }, [])
    return (
        <WordContext.Provider value={{ Grid, setGrid, currAttempt, setCurrAttempt, onEnter, onSelectLetter, onDelete, correctWord, wordSet, setWordSet, disabledWords, setDisabledWords, gameOver, setGameOver }}>
            {props.children}
        </WordContext.Provider>
    )
}
export default wordState
