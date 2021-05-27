const fs = require('fs');
const jwt = require('jsonwebtoken');

var privateKEY = fs.readFileSync('./../keys/private.key', 'utf8');
var publicKEY = fs.readFileSync('./../keys/public.key', 'utf8');

module.exports = {
    sign: (payload, user) => {
        sOptions = {
            issuer: "Authorization/Admin/TkBlog",
            subject: user,
        }
        let signOptions = {
            issuer: sOptions.issuer,
            subject: sOptions.subject,
            expiresIn: "1d",
            algorithm: "RS256"
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },

    verify: (token, user) => {
        if (user === undefined || user === null || user === ""){
            return false;
        }
        let Option = {
            issuer: "Authorization/Admin/TkBlog_Disabled",
            subject: user,
        };
        let verifyOptions = {
            issuer: Option.issuer,
            subject: Option.subject,
            expiresIn: "1d",
            algorithm: ["RS256"]
        };
        try{
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch(err) {
            return false;
        }
    },
    decode: (token) => { 
        return jwt.decode(token, {complete: true});
    }
}
