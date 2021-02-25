import React from 'react';
import Navbar from './components/nav/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Registration from './components/pages/Registration';
import Coaches from './components/pages/Coaches';
import Program from './components/pages/Program';
import MentormeFooter from './components/molecules/MentormeFooter';
import Kontakt from './components/pages/Kontakt';
import Impressum from './components/pages/Impressum';
import Datenschutz from './components/pages/Datenschutz';



function App() {
  return ( /// name="" showname=true 
    <div>
      <Navbar />
      <Switch>
      <Route exact path='/'
        render={props=> <Home {...props}/>}
        />
      <Route path='/About'
        render={props=> <About {...props}/>}
        />
      <Route path='/Registration'
        render={props=> <Registration {...props}/>}
        />.
        
        <Route path='/Coaches'
        render={props=> <Coaches {...props}/>}
        />
        <Route path='/Program'
        render={props=> <Program {...props}/>}
        />
        <Route path='/Kontakt'
        render={props=> <Kontakt {...props}/>}
        />
         <Route path='/Impressum'
        render={props=> <Impressum {...props}/>}
        />
         <Route path='/Datenschutz'
        render={props=> <Datenschutz {...props}/>}
        />
      </Switch>
      <MentormeFooter />
    </div>
  );
}

export default App;
