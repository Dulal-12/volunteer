import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Person from './components/person/Person';

export const user = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =  useState({});
  return (
    <user.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
        
        <Switch>
            <Route exact path='/'>
                     <Home></Home>
            </Route>
            <Route path='/login'>
                 <Login></Login>
            </Route>

          
           
           <PrivateRoute path='/register/:id'>
                     <Register></Register>
           </PrivateRoute>
           <Route path="/userInformation/">   
                        <Person></Person>
           </Route>
          
                
        
        </Switch>
        </Router>
    </user.Provider>
  );
}

export default App;
