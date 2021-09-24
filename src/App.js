import './App.css';
import Main from './components/Main';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React from 'react';
import Contents from './components/Сontents';
import Registration from './components/Registration';
import Chap1 from './pages/Chap1';
import Chap2 from './pages/Chap2';
import Chap3 from './pages/Chap3';
import Chap4 from './pages/Chap4';
import Chap5 from './pages/Chap5';
import Chap6 from './pages/Chap6';
import Chap7 from './pages/Chap7';
import Chap8 from './pages/Chap8';
import Chap9 from './pages/Chap9';
import Chap10 from './pages/Chap10';
import Chap11 from './pages/Chap11';
import Chap12 from './pages/Chap12';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/registration" component={Registration} />
        <Route path="/contents" component={Contents} />
        <Route path="/chap1" component={Chap1}/>
        <Route path="/chap2" component={Chap2}/>
        <Route path="/chap3" component={Chap3}/>        
        <Route path="/chap4" component={Chap4}/>
        <Route path="/chap5" component={Chap5}/>
        <Route path="/chap6" component={Chap6}/>
        <Route path="/chap7" component={Chap7}/>
        <Route path="/chap8" component={Chap8}/>
        <Route path="/chap9" component={Chap9}/>
        <Route path="/chap10" component={Chap10}/>
        <Route path="/chap11" component={Chap11}/>
        <Route path="/chap12" component={Chap12}/>
        <Redirect to="/" />
      </Switch>
    </Router>     
  );
}

export default App;
