const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/AdoptionCenter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the Adoption Center database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));