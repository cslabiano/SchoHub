const mongoose = require("mongoose"); // import mongoose library

module.exports = mongoose.model('residents', {
    name: { type: String, required: true },
    email: { type: String, required: true }
});