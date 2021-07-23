import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ShowPet from './components/ShowPet';
import UpdatePet from './components/UpdatePet';
import PetForm from './components/PetForm';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <hr></hr>
      <Router>
        <Main path="/"/>
        <PetForm path="/new"/>
        <ShowPet path="/pets/:id" />
        <UpdatePet path="pets/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;
