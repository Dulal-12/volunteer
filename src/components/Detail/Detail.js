import React from 'react';
import data from '../Home/data';
import './Detail.css';
const Detail = (props) => {
    
    const user = data.filter(element => element.id === parseInt(props.element));
    const [volunteer] = user;
    const id = volunteer.id;

    const deleteUser = (id)=>{
        fetch('https://ancient-gorge-76632.herokuapp.com/delete/?id='+id,{
        method:'DELETE'})
        .then(res=>res.json())
        .then(data=>{
            
            if(data){
                var element = document.querySelector('.containt');
                       element.parentNode.removeChild(element);
            }
        })



    }
    return (
        <div className="containt"id="upper1">
        <div className="card">
            <img src={volunteer.img} alt="" srcset=""/>
           
               <p>{volunteer.text}</p>
               <button className="btn btn-primary" onClick={()=>deleteUser(id)}>Delete</button>
           
    </div>
   </div>
    );
};

export default Detail;