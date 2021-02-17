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
passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // We already have a record of this user, do nothing
                    console.log('User already exists. Cool.');
                    done(null, existingUser);
                }
                else {
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
    }
));