const mongoose  = require("mongoose");

const projectSchema = new mongoose.Schema ({
    name: String,
    location: String,
    date: Number,
    typology: String,
    description: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    image7: String
})

const ProjectsCollection = mongoose.model('ProjectsCollection', projectSchema)

module.exports = ProjectsCollection
