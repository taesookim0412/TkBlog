const fs = require('fs');
const path = require('path');

module.exports = (mongoose, AutoIncrement) => {
    mongoose.connect("mongodb://localhost/tkblog", {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true});
    const model_path = path.join(__dirname, './../models');
    fs.readdirSync(model_path).forEach((file) => {
        if (file.indexOf('.js') > 0) {
            require(model_path + '/' + file)(mongoose, AutoIncrement);
        }
    })
}
