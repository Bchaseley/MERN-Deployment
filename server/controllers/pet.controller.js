const { Pet } = require('../models/pet.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPet = (request, response) => {
    const { name, type, description, skill1, skill2, skill3 } = request.body;
    Pet.create({ name, type, description, skill1, skill2, skill3})
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({}, null, {sort: {type:1}})
        .then(pets => response.json(pets))
        .catch(err => response.status(400).json(err));
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err));
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err));
}