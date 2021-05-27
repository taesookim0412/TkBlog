const mongoose = require('mongoose');
const blog = mongoose.model("blogs");
const home = mongoose.model("home");
const cat = mongoose.model("cat");
const dog = mongoose.model("dog");
const car = mongoose.model("car");
const contact = mongoose.model("contact");

const jwt = require('./../services/jwt.js')


const multer = require('multer');
const s3conf = require('./../configs/s3.js');
const S3BlogUpload = multer({ storage: s3conf.blog }).array('file');
const S3CatsUpload = multer({ storage: s3conf.cat }).array('file');
const S3DogsUpload = multer({ storage: s3conf.dog }).array('file');
const S3CarsUpload = multer({ storage: s3conf.car }).array('file');
const S3HomeUpload = multer({ storage: s3conf.home }).single('file');


module.exports = {
    createPost: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        S3BlogUpload(req, res, (err) => {
            let postObj = { title: req.body.title, preview: req.body.preview, description: req.body.description, date: req.body.date, imgs: [] };
            for (let i = 0; i < req.files.length; i++) {
                let blogImg = { order: i, url: req.files[i]['location'] };
                postObj.imgs.push(blogImg);
            }
            blog.create(postObj, (data) => {
                res.end();
            });

        })
    },
    editPost: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        S3BlogUpload(req, res, (err) => {
            let postObj = { title: req.body.title, preview: req.body.preview, description: req.body.description, date: req.body.date, imgs: [] };
            let j = 0;
            let k = 0;
            let rOrder = req.body.fOrder;
            if (rOrder != undefined) {
                //Array works since it's a character. For example rOrder[i] would be either u or u, since [0] of u is u.
                for (let i = 0; i < rOrder.length; i++) {
                    if (rOrder[i] === "u") {
                        let blogImg = { url: req.files[j]['location'] };
                        postObj.imgs.push(blogImg);
                        j++;
                    }
                    // Might grab "h" from "http"
                    else if (rOrder[i] === "e") {
                        if (typeof req.body.editedFile === 'object') {
                            let blogImg = { url: req.body.editedFile[k] };
                            postObj.imgs.push(blogImg);
                        }
                        else if (typeof req.body.editedFile === 'string') {
                            let blogImg = { url: req.body.editedFile };
                            postObj.imgs.push(blogImg);
                        }
                        k++;
                    }
                }
            }
            blog.updateOne({ _id: req.body.id }, postObj, (err, data) => {
                res.end();
            });
        });
    },
    setHome: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        S3HomeUpload(req, res, (err) => {
            home.findOne({}, (err, data) => {
                let postData = { url: req.file['location'] };
                if (data !== null) {
                    let id = data['_id'];
                    home.updateOne({ _id: id }, postData, (err, data) => res.end());
                }
                else {
                    home.create(postData, (data) => res.end());
                }
            });
        });
    },
    createCats: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        S3CatsUpload(req, res, (err) => {
            let fLen = req.files.length;
            let cats = [];
            for (let i = 0; i < fLen; i++) {
                let bObj = { url: req.files[i]['location'] };
                cats.push(bObj);
            }
            cat.insertMany(cats, (err, data) => res.end());
        })
    },
    createDogs: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        S3DogsUpload(req, res, (err) => {
            let fLen = req.files.length;
            let dogs = [];
            for (let i = 0; i < fLen; i++) {
                let bObj = { url: req.files[i]['location'] };
                dogs.push(bObj);
            }
            dog.insertMany(dogs, (err, data) => res.end());
        })
    },
    createCars: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        S3CarsUpload(req, res, (err) => {
            let fLen = req.files.length;
            let cars = [];
            for (let i = 0; i < fLen; i++) {
                let bObj = { url: req.files[i]['location'] };
                cars.push(bObj);
            }
            car.insertMany(cars, (err, data) => res.end());
        })
    },

    deleteCats: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        cat.findByIdAndDelete(req.params.id, (err, data) => res.end());
    },
    deleteDogs: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        dog.findByIdAndDelete(req.params.id, (err, data) => res.end());
    },
    deleteCars: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        car.findByIdAndDelete(req.params.id, (err, data) => res.end());
    },

    getContact: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        contact.find({}, null, { sort: { cId: -1 } }, (err, data) => res.json(data));
    },
    getContactById: (req, res) => {
        let token = req.headers.token;
        let user = req.headers.user;
        if (jwt.verify(token, user) === false) {
            res.end();
            return;
        }
        contact.findById(req.params.id, (err, data) => res.json(data));
    }
}
