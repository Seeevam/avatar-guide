import React from 'react';
import NationSelector from '../nation-selector/nation-selector.component';
import SearchCharacter from '../search-character/search-character.component';
import './homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='homepage'>
            <h1 className='title' >Welcome to Avatar Guide</h1>
            <NationSelector />
            <SearchCharacter />
        </div>
    )
};

export default Homepage;