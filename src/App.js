import React from 'react';
import Navbar from './components/Nav/Navbar';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import Coaches from './components/Coaches/Coaches';
import Program from './components/Program/Program';

function App() {
  return ( /// name="" showname=true 
    <div className="App">
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
    </div>
  );
}

export default App;
