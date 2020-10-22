import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './routes/Home/Home';
import Signup from './routes/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Route path='/' exact component={Home}/>
        <Route path='/userSignup' exact component={Signup}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
