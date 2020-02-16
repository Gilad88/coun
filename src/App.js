import React from 'react';
import N from './n';
import Example from './nh';
import ClockE from './efeclock';
import Asia from './cuntri';
import Europe from './europe';
import Africa from './africa';
import Oceania from './oceania';
import Americas from './americas';
import Nav from './reg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      <Switch>
        <Route path ='/' exact component={Nav} />
        <Route path ='/cuntries' exact component={Asia} />
        <Route path ='/europe' exact component={Europe} />
        <Route path ='/africa' exact component={Africa} />
        <Route path ='/oceania' exact component={Oceania} />
        <Route path ='/americas' exact component={Americas} />
      </Switch>
      </Router>
    </div>
  );
}
const Home = () => (
  <div>
     <Link to='/'>
    <h1>home</h1>
     </Link>
  </div>
)
export default App;

{/*  <header className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
   <p>
     Edit <code>src/App.js</code> and save to reload.
   </p>
   <a
     className="App-link"
     href="https://reactjs.org"
     target="_blank"
     rel="noopener noreferrer"
   >
     Learn React
   </a>
 <N />
 <Example />
 <ClockE />
 </header> */}