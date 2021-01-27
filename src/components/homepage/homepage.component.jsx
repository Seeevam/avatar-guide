import React from 'react';
import NationSelector from '../nation-selector/nation-selector.component';
import SearchCharacter from '../search-character/search-character.component';
import './homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='homepage py-10'>
            <h1 className='title m-12 ' >Welcome to Avatar Guide</h1>
            <NationSelector />
            <SearchCharacter />
        </div>
    )
};

export default Homepage;