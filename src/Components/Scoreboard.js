import '../styles/Scoreboard.css';

function Scoreboard(props) {
    return (
        <div className="Scoreboard">
            <div className="current-score">
                <h2>Current Score: {props.currentScore}</h2>
            </div>
            <div className="high-score">
                <h2>High Score: {props.highScore}</h2>
            </div>
        </div>
    )
}

export default Scoreboard;