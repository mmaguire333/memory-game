import Card from './Card';
import { useState } from 'react';
import '../styles/CardContainer.css';
import {
    Abra,
    Bellsprout,
    Bulbasaur,
    Celebi,
    Charmander,
    Diglett,
    Ekans,
    Elekid,
    Geodude,
    Growlithe,
    Gyarados,
    Jigglypuff,
    Jolteon,
    Meowth,
    Mew,
    Pidgey,
    Pikachu,
    Quagsire,
    Rattata,
    Sandshrew,
    Snorlax,
    Spearow,
    Squirtle,
    Vulpix
} from '../Images';

function CardContainer(props) {
    const [displayedCardIndices, setDisplayedCardIndices] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    const updateIndices = () => {
        let randomIndices = [];

        while(randomIndices.length < 8) {
            let randomIndex = Math.floor(Math.random() * cardData.length);
            if(!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }


        setDisplayedCardIndices(randomIndices);
    }

    const [cardData, setCardData] = useState([
        {title: "Abra",       src: Abra,       alt: "Abra",       key: "0",  clicked: false},
        {title: "Bellsprout", src: Bellsprout, alt: "Bellsprout", key: "1",  clicked: false},
        {title: "Bulbasaur",  src: Bulbasaur,  alt: "Bulbasaur",  key: "2",  clicked: false},
        {title: "Celebi",     src: Celebi,     alt: "Celebi",     key: "3",  clicked: false},
        {title: "Charmander", src: Charmander, alt: "Charmander", key: "4",  clicked: false},
        {title: "Diglett",    src: Diglett,    alt: "Diglett",    key: "5",  clicked: false},
        {title: "Ekans",      src: Ekans,      alt: "Ekans",      key: "6",  clicked: false},
        {title: "Elekid",     src: Elekid,     alt: "Elekid",     key: "7",  clicked: false},
        {title: "Geodude",    src: Geodude,    alt: "Geodude",    key: "8",  clicked: false},
        {title: "Growlithe",  src: Growlithe,  alt: "Growlithe",  key: "9",  clicked: false},
        {title: "Gyarados",   src: Gyarados,   alt: "Gyarados",   key: "10", clicked: false},
        {title: "Jigglypuff", src: Jigglypuff, alt: "Jigglypuff", key: "11", clicked: false},
        {title: "Jolteon",    src: Jolteon,    alt: "Jolteon",    key: "12", clicked: false},
        {title: "Meowth",     src: Meowth,     alt: "Meowth",     key: "13", clicked: false},
        {title: "Mew",        src: Mew,        alt: "Mew",        key: "14", clicked: false},
        {title: "Pidgey",     src: Pidgey,     alt: "Pidgey",     key: "15", clicked: false},
        {title: "Pikachu",    src: Pikachu,    alt: "Pikachu",    key: "16", clicked: false},
        {title: "Quagsire",   src: Quagsire,   alt: "Quagsire",   key: "17", clicked: false},
        {title: "Rattata",    src: Rattata,    alt: "Rattata",    key: "18", clicked: false},
        {title: "Sandshrew",  src: Sandshrew,  alt: "Sandshrew",  key: "19", clicked: false},
        {title: "Snorlax",    src: Snorlax,    alt: "Snorlax",    key: "20", clicked: false},
        {title: "Spearow",    src: Spearow,    alt: "Spearow",    key: "21", clicked: false},
        {title: "Squirtle",   src: Squirtle,   alt: "Squirtle",   key: "22", clicked: false},
        {title: "Vulpix",     src: Vulpix,     alt: "Vulpix",     key: "23", clicked: false}
    ]);

    const updateCardClicked = (cardTitle) => {
        const updatedData = cardData.map((card) => {
            if(card.title === cardTitle) {
                return {...card, clicked: true};
            } else {
                return card;
            }
        });

        setCardData(updatedData);
    }

    const resetCardsClicked = () => {
        const resetData = cardData.map((data) => ({...data, clicked: false}))
        setCardData(resetData);
    }

    return (
        <div className="CardContainer">
            {cardData.filter((data) => displayedCardIndices.includes(cardData.indexOf(data))).map((data) => {
                return <Card 
                            title={data.title}
                            src={data.src}
                            alt={data.alt}
                            clicked = {data.clicked}
                            key={data.key}
                            updateIndices={updateIndices}
                            updateCardClicked={updateCardClicked}
                            resetCardsClicked={resetCardsClicked}
                            updateScore={props.updateScore}
                            resetCurrentScore={props.resetCurrentScore}
                            ></Card>;
            })}
        </div>
    );
}

export default CardContainer;