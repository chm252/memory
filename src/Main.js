import './Main.css';
import Display from './Display.js'
import { useState } from 'react';
function Main () {
    
    const [key, setKey] = useState(0);
    const handleRestart = () => setKey(key + 1);

    let string = ""
    for (let i = 0 ; i < 20  ; i++) {
            let random = Math.floor(Math.random() * 10);
            string += random.toString();
    }
    

    return (
        <Display key={key} string = {string} handleRestart = {handleRestart}/>
    )
}

export default Main;