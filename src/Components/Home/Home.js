
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';



const Home = () => {
    
    const [events, setEvets]= useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/allEvents')
        .then(response => response.json())
        .then(data => setEvets(data))
    },[])
    return (
        <>
    <div className="container d-flex justify-content-center">
    <div className="row">
            {events.map(ev => <Event event={ev} key={ev._id}></Event>)}
        </div>
    </div>
        </>
    );
};

export default Home;