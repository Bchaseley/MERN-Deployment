import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetForm = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);

    const addPet = e => {
        e.preventDefault();
        axios.post('/api/pets', { name, type, description, skill1, skill2, skill3 })
            .then(res => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                navigate('/new')
            })

    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h3>Add a new Pet to Adopt:</h3>
            <form onSubmit={addPet}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name: </label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Type of Animal: </label><br />
                    <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
                </p>
                <p>
                    <label>Description of Animal: </label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <h3>Skills: (optional)</h3>
                <p>
                    <label>Skill one: </label><br />
                    <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                </p>
                <p>
                    <label>Skill Two: </label><br />
                    <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                </p>
                <p>
                    <label>Skill Three: </label><br />
                    <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default PetForm;