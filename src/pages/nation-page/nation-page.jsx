import React, { useEffect, useState } from 'react';
import CharacterCard from '../../components/character-card/character-card.component';

import './nation-page.style.scss';

const NationPage = ({ name, url }) => {

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = () => {
        fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${name}&perPage=1000`)
            .then(response => response.json())
            .then(data => setCharacters(data));

    };
    const updateTitle = () => {
        document.title = `${name.toUpperCase()} - Avatar Guide`
    }

    useEffect(() => {
        fetchCharacters();
        updateTitle();
    });



    return (
        <div className='nation-page'>
            <h1 className='title'>{name.toUpperCase()} NATION</h1>
            <figure>
                <img src={url} alt={`${name}`}></img>
            </figure>
            <div className='characters'>
                {characters.map((character, i) =>
                    <CharacterCard nationName={name} character={character} key={i} />)}
            </div>
        </div>
    );
}

export default NationPage;