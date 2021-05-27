const mongoose = require('mongoose');
const blog = mongoose.model('blogs');
const home = mongoose.model('home');
const cat = mongoose.model("cat");
const dog = mongoose.model("dog");
const car = mongoose.model("car");
const contact = mongoose.model("contact");

module.exports = {
    getBlog: (req, res) => {
        blog.find({}, null, {sort: { _id: -1 }}, (err, data) => res.json(data));
    },
    getHome: (req, res) => {
        home.findOne({}, (err, data) => res.json(data));
    },
    getBlogEntry: (req, res) => {
        blog.findById(req.params.id, (err, data) => res.json(data));
    },
    getBlogEntries: (req, res) => {
        blog.find({}, null, {sort: { _id: -1 } }, (err, data) => res.json(data));
    },
    getCats: (req, res) => {
        cat.find({}, null, {sort: { _id: -1 } }, (err, data) => res.json(data));
    },
    getDogs: (req, res) => {
        dog.find({}, null, {sort: { _id: -1 } }, (err, data) => res.json(data));
    },
    getCars: (req, res) => {
        car.find({}, null, {sort: { _id: -1 } }, (err, data) => res.json(data));
    },
    postContact: (req, res) => {
        contact.create(req.body, (err, data) => res.json(data));
    }
}
