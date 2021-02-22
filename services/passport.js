const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// This passport callback is called after the GoogleStrategy callback that
// creates or checks for a user. The info passed to done() here is put in 
// a cookie by passport.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// userId is the exact data stuffed into a cookie in serializeUser()
passport.deserializeUser(async (userId, done) => {
    const user = await User.findById(userId);
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        
        if (existingUser) {
            // We already have a record of this user, do nothing
            console.log('User already exists. Cool.');
            done(null, existingUser);
        }

        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
    }
));