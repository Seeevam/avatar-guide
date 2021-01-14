import React, { useEffect, useState }  from 'react';

import './character.-expanded.style.scss';

const CharacterExpanded = (props) => {
    const { nationName, characterName } = props.match.params;
    const [currentCharacter, setCurrentCharacter] = useState(undefined);

    useEffect(()=>{

        fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterName}`)
        .then(response => response.json())
        .then(data => setCurrentCharacter(data));
    

    },[])
     

    console.log(currentCharacter);

    return (
        <div className='character-expanded-container'>

        {
            currentCharacter
             ? 
        
            <div className='character-expanded-info' >
              <img src={currentCharacter[0].photoUrl} alt={currentCharacter[0].name} />
            <div className='character-expanded-text' >
                <h1>{currentCharacter[0].name}</h1>
                <span>{currentCharacter[0].affiliation}</span>
                <ul>Allies:  {
                    currentCharacter[0].allies.map((ally,i) => <li key={i} >{ally}</li> )
                    }</ul>
                <ul>Enemies:  {
                    currentCharacter[0].enemies.map((enemy,i) => <li key={i} >{enemy}</li> )
                    }</ul>
            </div>
            </div>
        :
        null
}
</div>
        
    );
}

export default CharacterExpanded;