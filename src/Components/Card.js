function Card(props) {
    const updateOnClick = () => {
        if(!props.clicked) {
            props.updateCardClicked(props.title);
            props.updateIndices();
            props.updateScore();
        } else {
            props.resetCurrentScore();
            props.resetCardsClicked();
            props.updateIndices();
            document.querySelector('.CardContainer').style.display = 'none';
            document.querySelector('.GameOver').style.display = 'block';
        }
    }

    return (
        <div className="Card" onClick={updateOnClick}>
            <img src={props.src} alt={props.alt}/>
            <p>{props.title}</p>
        </div>
    )
}

export default Card;