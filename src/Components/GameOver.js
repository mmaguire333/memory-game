import '../styles/GameOver.css';

function GameOver() {
    const handleRestart = () => {
        document.querySelector('.CardContainer').style.display = 'grid';
        document.querySelector('.GameOver').style.display = 'none';
    }

    return (
        <div className="GameOver">
            <h3>Game Over</h3>
            <p>You chose the same card twice.</p>
            <button type="button" onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default GameOver;