import React, { useContext, useState } from 'react';
import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import logo1 from '../../logos/Group 1329.png';
import google1 from '../../logos/google1.png';
import firebaseConfig from '../firebase.config';
import {user} from'../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser,setLoggedInUser] = useContext(user);
    const [detail,setNewDetail] = useState({displayName:'',email:''})
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   

    const logInGoogle = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then((result)=> {
             const {displayName,email} = result.user;
             const newDetail = {...detail};
             newDetail.displayName  = displayName;
             newDetail.email = email;
             setLoggedInUser(newDetail);
             history.replace(from);
             })
          
    }
    return (
        <>
        
        <div id='top'>
                <img src={logo1} alt="" srcset=""/>
        </div>
        

           <div id="middle">

            <div id="center1">
                <h1>Login With</h1>
            </div>

            <div id="center">
                <button onClick={()=> logInGoogle()}><img src={google1} alt=""/><p>Continue With Google</p></button>
              
            </div>
        
        </div>
        </>

    );
};

export default Login;