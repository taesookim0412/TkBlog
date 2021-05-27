const mongoose = require('mongoose');
const account = mongoose.model('accounts');
const bcrypt = require('bcryptjs');
const jwt = require('./../services/jwt.js');

module.exports = {
    // Create User
    create: (req, res) => {
        bcrypt.hash(req.body.pass, 10)
            .then(hashed_password =>
                account.create({user: req.body.user, pass: hashed_password}, () => res.end())
            )
    },
    login: (req, res) => {
        account.findOne({user: req.body.user}, (err, data) => {
            if (err || data === null || req.body.user === null || req.body.pass === null) {
                res.json({message: "Error"});
            } else {
                bcrypt.compare(req.body.pass, data['pass'])
                    .then(result => {
                        if (result === true) {
                            const token = jwt.sign({auth: 'admin'}, req.body.user);
                            res.json({message: "Success", token: token});
                        } else if (result === false) {
                            res.json({message: "Failed"});
                        }
                    })
                    .catch(error => {
                        res.json({message: "Error"});
                    })
            }
        });
    },
}
