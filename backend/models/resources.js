const mongoose = require("mongoose"); // import mongoose library

module.exports = mongoose.model('resources', {
    file_name: { type: String, required: true },
    link: { type: String, required: true }
})