import './Results.css';
function Results(props) {
    return (
        <>        {props.isCorrect?
        <div className="results">
            <h2 style={{color:'green', textDecoration:'underline'}}>Correct</h2>
            <p>Score: 100% </p>

        </div>
        :
        <div className="results">
        <h2 style = {{color:'red', textDecoration:'underline'}}>Wrong!</h2>
        <p>Score: 0</p></div>
        }
        </>
    )
}
export default Results;