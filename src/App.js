import React from 'react';
import Navbar from './components/Nav/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About/About';
import Registration from './components/pages/Registration/Registration';
import Coaches from './components/pages/Coaches';
import Program from './components/pages/Program/Program';
import Footer from '../src/components/Organism/Footer';

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
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
