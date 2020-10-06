import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {img,text,id} = props.element;

    return (
       <div className="containt">
           <div className="card">
               <img src={img} alt="" />
              <div id="text">
              <Link to={`/register/${id}`}><p>{text}</p></Link>
              </div>
       </div>
      </div>
    );
};

export default Card;