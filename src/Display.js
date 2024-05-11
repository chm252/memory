import Bar from './Bar.js'
import Question from './Question.js'
import Results from './Results.js'
import './Display.css';
import { useEffect, useState } from 'react';

function Display (props) {
    const string = props.string;

    const [isMemorising, setIsMemorising] = useState(true);
    const toggleIsMemorising = () => {
        setIsMemorising(false);
    }

    const[checkAns, setCheckAns] = useState(false);
    const toggleCheckAns = () => {
        setCheckAns(true);
    }

    const [attempt, setAttempt] = useState(null);
    const getAttempt = (n) => {
        setAttempt(n);
    }


    return (
        <>
        <div className='main'>
            <Question isMemorising = {isMemorising} checkAns = {checkAns} string = {string}/>
            <div className = "second_layer">
                <Bar isMemorising = {isMemorising} checkAns = {checkAns} handleAttempt={getAttempt}/>
                {isMemorising ? <button className='button' onClick={toggleIsMemorising}> Start </button> 
                :<button className='button' onClick={toggleCheckAns}> Done </button>}
            </div>
        </div>
            {checkAns && <><Results isCorrect = {attempt == string} attempt ={attempt} string = {string}/>
                <button className = "restartButton" onClick={props.handleRestart}>Restart 🦁🐼 </button></>
                }
        </>

    )
}

export default Display