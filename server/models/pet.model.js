const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({

    name: { 
        type: String,
        required: [true, "Pet's name is required!"],
        minlength: [3, "Pet's name must be 3 character's or longer!"]},
    
        type: {
        type: String,
        required: [true, "Type of animal is required!"],
        minLength: [3, "Type must be at least 3 characters!"]},
    
        description: { 
        type: String,
        required: [true, "Description is required!"],
        minLength: [3, "Description of animal must be at least 3 characters!"]},
        
        skill1: String,
        skill2: String,
        skill3: String}, 
        
        { timestamps: true });


module.exports.Pet = mongoose.model('Pet', PetsSchema);