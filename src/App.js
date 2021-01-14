import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";


import './App.css';
import NationSelector from './components/nation-selector/nation-selector.component';
import NationPage from './pages/nation-page/nation-page';
import CharacterPage from './pages/character-page/character.page';
import CharacterExpanded from './components/character-expanded/character-expanded.component';
import SearchCharacter from './components/search-character/search-character.component';
import Homepage from './components/homepage/homepage.component';
// import './app.style.scss'

function App() {
  return (
    <div className="App">
    
    <Switch>
    <Route exact path='/' component={Homepage} />
    {[["water",'https://i.pinimg.com/originals/2d/17/68/2d1768b3b93a585dd75368502171fad9.png'],
      ["earth",'https://i.pinimg.com/originals/53/86/fd/5386fd5eb91e5e7b3fd96595317f5a31.png'],
      ["fire",'https://www.worldanvil.com/media/cache/skyscraper/uploads/images/03451c08855be9184dcbf736fe74694c.png'],
      ["air",'https://i.pinimg.com/originals/e6/79/49/e6794931f852802bfec52c8133d4f34d.png']]
       .map((name,i)=> <Route exact key={i} path={`/${name[0]}`} render={()=> 
     <NationPage name={name[0]} url={name[1]} />
     } /> )
    }
    {/* {
      ["water","earth","fire","air"]
      .map((nationName, i)=><Route path={`/${nationName}/:characterName`} key={i} render={()=><CharacterExpanded/>}/>)
    } */}
    <Route path={`/:nationName/:characterName`} render={(props)=><CharacterExpanded  {...props} />} />


    </Switch>


    </div>
  );
}

export default App;
