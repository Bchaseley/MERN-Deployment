const PetController = require('../controllers/pet.controller');

//below are all routes that the react app will call on to make the api calls based on what user needs
module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
}