import React from 'react';
import './Home.css';
import data from './data';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import logo1 from '../../logos/Group 1329.png';

const Home = () => {
    return (
        <div>
            <div id='upper'>
                <img src={logo1} alt="" />
                <Link to="/" id="home">Home</Link>
                <Link to="/#" id="donation">Donation</Link>
                <Link to="/#" id="blog">Blog</Link>
                <Link to="/#" id="events">Events</Link>
                <button id="admin">Admin</button>
                <h1>I GROW BY HELPING IN NEED</h1>
                <input type="text" placeholder="search"/>
                <button className='btn btn-primary button2' id='search'>Search</button>
            </div>
             { data.map(element=><Card element={element} key={element.id} ></Card>)}
        </div>
    );
};
export default Home;