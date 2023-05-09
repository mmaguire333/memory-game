import '../styles/Scoreboard.css';

function Scoreboard() {


    return (
        <div className="Scoreboard">
            <div className="current-score">
                <h2>Current Score: 0</h2>
            </div>
            <div className="high-score">
                <h2>High Score: 0</h2>
            </div>
        </div>
    )
}

export default Scoreboard;