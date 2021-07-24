import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdatePet = ({id}) => {
    
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('/api/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                
            })
    }, [id])
    
    const updatePet = e => {
        e.preventDefault();
        axios.put('/api/pets/' + id, { name, type, description, skill1, skill2, skill3 })
            .then(res => {navigate('/')})
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                navigate(`/pets/${id}/edit`);
            })

    }
    
    return (
        <div>
            <h1>Update Pet</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={updatePet}>
                <p>
                    <label>Name: </label><br />
                    <input type="text" name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Type of animal: </label><br />
                    <input type="text" name="name" value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description of animal: </label><br />
                    <input type="text" name="name" value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Skill One: </label><br />
                    <input type="text" name="skill1" value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Two: </label><br />
                    <input type="text" name="skill2" value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Three: </label><br />
                    <input type="text" name="skill3" value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <button><Link to={"/"}>Home</Link></button>
        </div>
    )
}

export default UpdatePet;