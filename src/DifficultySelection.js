import { useState } from 'react';
import './DifficultySelection.css'
function DifficultySelection(props) {

    const[showDifficulty, setShowDifficulty] = useState(false);
    const levels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let [selected, setSelected] = useState(20);
    return (
        <div style = {{display:'flex'}}>
            {showDifficulty 
                && 
                <div style={{backgroundColor:"darkSlateGrey", width:"100%"}}>
            {
            levels.map((level, index) => (
                <button style={level==selected ? {borderColor :'green', borderWidth:'thick'} : {borderColor :'white'}} key={index} className='level' 
                    onClick={() => {
                        if (level != selected) {
                            setSelected(level);
                            props.difficultyChange(level)
                        }
                }}>
                    {level}
                </button>
            ))
            }
                </div>}
            <button className="DS" onClick={()=>setShowDifficulty(!showDifficulty)}/>
        </div>
    )
}

export default DifficultySelection;