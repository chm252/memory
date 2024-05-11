import { useState } from "react";
import "./Bar.css"
function Bar(props) {
    const [text, setText] = useState('')
    const handleText = (e) => {
        setText(e.target.value);
    }
    if (props.checkAns) {
        props.handleAttempt(text);
    }
    return props.isMemorising ? (
        <input 
            type = "text"
            value = {text}
            onChange = {handleText}
            className = "bar"
            readOnly
            />
    ) : (
        <input 
        type = "text"
        value = {text}
        onChange = {handleText}
        className = "bar"
        onPaste = {(event) => event.preventDefault()}
        />
    )

}
export default Bar;