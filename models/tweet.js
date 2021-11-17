// 1) Define mongoose schema

const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    likes: { type: Number, default: 0},
    sponsored: {type: Boolean, default: false}
}, { timestamps: true });

// 2) Compile mongoose schema into a mongoose model
const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

/*
Tweet.create()
Tweet.find()
Tweet.findById()
Tweet.findOne()
Tweet.findByIdAndUpdate()
Tweet.findByIdAndDelete()
*/



// 3) Use mongoose model methods to perform CRUD data operations on amongodb collection