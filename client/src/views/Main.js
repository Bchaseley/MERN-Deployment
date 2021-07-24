import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import '../App.css';

const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('/api/pets')
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId));
    }
    return (
        <div>
            {loaded && <PetList pets={pets} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;