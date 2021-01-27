import React, { useEffect, useRef, useState }  from 'react';
import CharacterCard from '../character-card/character-card.component';
import './search-character.styles.scss'

const SearchCharacter = () => {
    const [searchedState , setSearchedState] = useState(null);
    const [searchedCharacter , setSearchedCharacter ] = useState(null);
    const textInput = useRef();

    const searchCharacter = () =>{


            fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${searchedState}`)
            .then(response => response.json())
            .then(data => setSearchedCharacter(data));

    }

    const clearCharacter = () =>{
        setSearchedCharacter(null);
        textInput.current.value = '';
    }

    return (
        <div className='search-character-container' >
            <div className='search-container' >
                <input className='search-bar w-64 sm:w-1/2 rounded-lg ' type='text' placeholder="Seach by name..."
                ref={textInput} onChange={evt => setSearchedState(evt.target.value) }  />
                <button className='search-button px-4 py-1 rounded-md ' onClick={searchCharacter} >Search</button>
                <button className='clear-button px-5 py-1 rounded-md ' onClick={clearCharacter}>Clear</button>
            </div>
            { searchedCharacter?
            <div className='searched-characters-container'>
            {searchedCharacter.map((character, i) =>
                 <CharacterCard character={character} key={i} />)}
            </div>
            :
            null
            }
        </div>
    );
}
const searchBar = document.querySelector('.search-bar');


export default SearchCharacter;