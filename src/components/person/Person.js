import React, { useContext, useState, useEffect } from 'react';
import { user } from '../../App';
import logo1 from '../../logos/Group 1329.png';
import './Person.css';
import { Link, useHistory } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Person = () => {
    const [loggedInUser,setLoggedInUser] = useContext(user);
    const [find,setFind] = useState([]);
    const [user1,setUser1] = useState({
        displayName: '',
        email:'',
    });
   const history = useHistory();
     useEffect(()=>{
        fetch('https://ancient-gorge-76632.herokuapp.com/volunterr/?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setFind(data)
        })
     },[])

     const signOut = (loggedInUser)=>{
         const user2 = {...user1};
         user2.displayName ='';
         user2.email = '';
         setLoggedInUser(user2);
         history.push('/login');

     }
    return (
        <div>
           <div id='upper'>
                <img src={logo1} alt="" srcset=""/>
                <Link to="/" id="home">Home</Link>
                <Link to="/#" id="donation">Donation</Link>
                <Link to="/#" id="blog">Blog</Link>
                <Link to="/#" id="events">Events</Link>
                <p id="text1">{loggedInUser.displayName}</p>
                <button className="btn btn-primary" id="text3" onClick={()=>signOut()}>Sign Out</button>
                
             </div>
             <div>
                 {
                     find.map(element=><Detail element={element.id}></Detail>)
                 }
             </div>
           
        </div>
    );
};

export default Person;