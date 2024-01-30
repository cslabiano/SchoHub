const mongoose = require("mongoose"); // import mongoose library

module.exports = mongoose.model('users', {
    name: { type: String, required: true },
    email: { type: String, required: true },
    // password: { type: String, required: true },
    class: { type: String, required: true},
    batch: { type: String, required: true },
    department: { type: String, required: true },
    bio: { type: String, required: true }
});