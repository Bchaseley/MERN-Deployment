import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const ShowPet = ({id}) => {

    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => setPet(res.data))
    }, [id])

    const adoptPet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            navigate('/')
    }

    const removeFromDom = petId => {
        setPet(pet => pet._id !== petId);
    }
    return (
        <div>
            <h3>Details about {pet.name}</h3>
            <div>
                <p>Pet Type: {pet.type}</p>
                <p>Pet Description: {pet.description}</p>
                <h4>Skills:</h4>
                {pet.skill1 ?
                    <ul>
                        <li>{pet.skill1}</li>
                        <li>{pet.skill2}</li>
                        <li>{pet.skill3}</li>
                    </ul>:
                    <p>No Skills added for this animal!</p>}
            </div>
            <button onClick={(e)=>{adoptPet(pet._id)}}>Adopt!</button>
            <button><Link to={"/"}>Home</Link></button>
        </div>
    )
}

export default ShowPet;