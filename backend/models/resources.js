const mongoose = require("mongoose"); // import mongoose library

/* module.exports = mongoose.model('resources', {
    file_name: { type: String, required: true },
    link: { type: String, required: true },
    course: {type: String, required: true }
}); */

const fileDetails = new mongoose.Schema (
    {
        course: String,
        file_name: String,
        link: String,
        type: String,
    }, 
    {collection:"resources"}
); 

module.exports = mongoose.model("resources", fileDetails);