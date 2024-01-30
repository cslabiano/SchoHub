const mongoose = require("mongoose"); // import mongoose library

module.exports = mongoose.model('requests', {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    date: { type: String, required: true },
    course: { type: String, required: true },
    file: { type: String, required: true },
    purpose: { type: String, required: true }
});