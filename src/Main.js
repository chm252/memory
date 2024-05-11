import './Main.css';
import Display from './Display.js'
import DS from './DifficultySelection.js'
import { useState } from 'react';
function Main () {
    
    const [key, setKey] = useState(0);
    const handleRestart = () => setKey(key + 1);
    const [level, setLevel] = useState(20);
    const difficultyChange = (level) => {
        handleRestart();
        setLevel(level);
    }
    let string = ""
    for (let i = 0 ; i < level  ; i++) {
            let random = Math.floor(Math.random() * 10);
            string += random.toString();
    }
    

    return (
        <>
        <DS difficultyChange={difficultyChange}/>
        <Display key={key} string = {string} handleRestart = {handleRestart}/>
        </>
    )
}

export default Main;