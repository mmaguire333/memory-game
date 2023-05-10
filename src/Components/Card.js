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