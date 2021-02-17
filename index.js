const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user'); // Executes contents of user.js
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Enable cookies and have passport handle them
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// If process.env.PORT (environment variable) isn't set, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);