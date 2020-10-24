import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './routes/Home/Home';
import Signup from './routes/Signup/Signup';
import Login from './routes/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Route path='/' exact component={Home}/>
        <Route path='/userSignup/:id' render={props => <Signup key={props.location.pathname} {...props}/>}/>
        <Route path='/userLogin' exact component={Login}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
