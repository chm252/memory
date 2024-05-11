import './Question.css'

function Question(props) {

    return (
        <div className='question' onCopy={(event) => event.preventDefault()}>
            {props.isMemorising||props.checkAns?props.string:null}
        </div>)

}

export default Question;