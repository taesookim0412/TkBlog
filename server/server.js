const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');


const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "..", "public", "dist", "public")))
// app.use(express.static(path.join(__dirname, 'misc')));



require('./configs/mongoose.js')(mongoose, AutoIncrement);
require('./configs/routes.js')(app);

app.get("*", (req, res, next) => res.sendFile(path.resolve(path.join(__dirname, "..", "public", "dist", "public", "index.html"))));

app.listen(8000, () => console.log("Listening on port 8000"));
