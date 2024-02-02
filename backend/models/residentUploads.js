const mongoose = require("mongoose"); // import mongoose library

module.exports = mongoose.model('residentUploads', {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    course: { type: String, required: true },
    filename: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
});