import React, { useState } from 'react';
import'./Register.css';
import logo1 from '../../logos/Group 1329.png';
import { useParams, useHistory } from 'react-router-dom';
import data from '../Home/data';
import { useContext } from 'react';
import { user } from '../../App';


const Register = () => {
    const {id} = useParams();
    const detail = data.find(element=> parseInt(element.id) === parseInt(id));
    const {text} = detail;
    const [loggedInUser,setLoggedInUser] = useContext(user);
    const {displayName,email} = loggedInUser;
   
    const history = useHistory();
  

    const handleSubmit = (loggedInUser,id)=>{
        const element = {...loggedInUser,id}
        
        fetch("https://ancient-gorge-76632.herokuapp.com/addVolunteer", {
            method: 'POST',
            body: JSON.stringify(element),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            history.push('/userInformation');
          }

   return (
        
        <div>
             <div id='top'>
                <img src={logo1} alt="" srcset=""/>
            </div>

            <form  action="https://ancient-gorge-76632.herokuapp.com/addVolunteer" id='form' method="post"  >
                <h1>Register as a Volunteer</h1>
                <input type="text" value={displayName}  name='FullName' id='name' required/>
                <input type="text" value={email} name='Email' id='email' required/>
                <input type="date" placeholder="Date"  name='date' id='date' required/>
                <input type="text" placeholder="Description"  name='description' id='description' required/>
                <input type="text" value={text}   name="books" id='books' required/>
               <button className='btn btn-primary button1'onClick={()=>handleSubmit(loggedInUser,id)} >Register</button>
            </form>
           
         </div>
    );
};

export default Register;