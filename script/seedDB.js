const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/nytreact"
);
const articleSeed = [
    {
        title: 'Ali Sells Jersey House And Moves to Chicago',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
    }
];