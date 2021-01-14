import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterPage from '../../pages/character-page/character.page';
import CharacterExpanded from '../character-expanded/character-expanded.component';
import './character-card.style.scss'
const CharacterCard = ({ character, nationName }) => {

    const { name, photoUrl, affiliation, allies, enemies } = character;

    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        console.log(isHidden);
        setIsHidden(!isHidden);
    }

    //    const CharacterContext = createContext(character);



    return (

        <div className='flip-character-card' onClick={() => toggleHidden()} >
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={photoUrl} alt={`${name}`}></img>
                    </div>
                    <div className="flip-card-back">
                        <div className='character-expanded-text' >
                            <span>Affiliation : {affiliation}</span>
                            <ul>Allies:  {
                                allies.map((ally, i) => <li key={i} >{ally}</li>)
                            }</ul>
                            <ul>Enemies:  {
                                enemies.map((enemy, i) => <li key={i} >{enemy}</li>)
                            }</ul>
                        </div>
                    </div>
                </div>
            </div>

            <Link className='link' to={`/${nationName}/${name}`} ><h2>{name}</h2></Link>
            {/* {
            !isHidden?<CharacterExpanded />: null
        } */}

        </div>

    );
}

export default CharacterCard;


/* <CharacterPage name={name}/> */