const mongoose = require('mongoose');
const { Schema } = mongoose; // {} syntax gets property of mongoose with the same name

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);