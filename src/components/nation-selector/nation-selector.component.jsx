import React  from 'react';
import {Link} from 'react-router-dom';

import "./nation-selector.style.scss";
const NationSelector = () => {
    return (
        <div className='nation-selector-container'>

        <p className='nation-selector-text'>Select any nation</p>
        <div className='nation-container'>
        {
            [["water",'https://i.pinimg.com/originals/2d/17/68/2d1768b3b93a585dd75368502171fad9.png'],
      ["earth",'https://i.pinimg.com/originals/53/86/fd/5386fd5eb91e5e7b3fd96595317f5a31.png'],
      ["fire",'https://www.worldanvil.com/media/cache/skyscraper/uploads/images/03451c08855be9184dcbf736fe74694c.png'],
      ["air",'https://i.pinimg.com/originals/e6/79/49/e6794931f852802bfec52c8133d4f34d.png']]
            .map((name,i)=>
            <Link className={`element ${name[0]}`} to={`/${name[0]}`} key={i}>
                <img src = {name[1]} alt = {name[0]} />
            </Link>
            )
        }</div>
        </div>
    );
}

export default NationSelector;