import React from 'react'
import { Link } from '@reach/router';
import '../App.css'


const PetList = ({pets }) => {

    return (
        <div>
            <Link to={'/new'}>Add a Pet to Adopt!</Link>
            <h3>These pets are looking for a good home:</h3>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {pets.map((pet, idx)=>{
                        return  <tr>

                                    <td key={idx}>{pet.name}</td>
                                    <td key={idx}>{pet.type}</td>
                                    <td>
                                        <button><Link to={"/pets/" + pet._id + "/edit"}>Edit</Link></button>
                                        <button><Link to={"/pets/" + pet._id}>Details</Link></button>
                                    </td>
                                </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default PetList;