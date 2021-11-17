// require dependecies
const express = require('express');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet')
// initialize the express app
const app = express();

// configure settings
const PORT = 3000;

// connect to and config mongodb
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.kzc3b.mongodb.net/tweeter?retryWrites=true&w=majority';

mongoose.connect(DATABASE_URL);

// set up listeners for mongodb events
// shortcut variable
const db = mongoose.connection; // this is object that represents our database in tjis application
// this object contains info related to db name, db host, db port, and any other relevant info

db.on('connected', () => console.log('Connected to MongoDB'))
db.on('error', (error) => console.log('MongoDB Error ' + error.message));


// mounting middleware
app.use(express.urlencoded({ extended: false})); // this creates req.body

// mount routes

// Create route
app.post('/tweets', (req,res) => {
    Tweet.create(req.body, (err, createdTweet) => {
        res.send(createdTweet);
    }) // this code runs asynchronous
});

// Index route
app.get('/tweets', (req, res) => {
    Tweet.find({}, (err, arrayOfTweets) => {
        res.send(arrayOfTweets);
    });
});



// tell the app to listen
app.listen(PORT, () => {
    console.log(`listening port on:${PORT}`);
})