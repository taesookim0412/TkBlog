const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({ credentials: new aws.SharedIniFileCredentials({ profile: 'demo' })});

module.exports = {
    blog: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'tkblogkim',
        metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
        key: (req, file, cb) => {
            cb(null, `imgs/blog/${Date.now()} ${file.originalname}`);
        }
    }),
    cat: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'tkblogkim',
        metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
        key: (req, file, cb) => {
            cb(null, `imgs/cats/${Date.now()} ${file.originalname}`);
        }
    }),
    dog: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'tkblogkim',
        metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
        key: (req, file, cb) => {
            cb(null, `imgs/dogs/${Date.now()} ${file.originalname}`);
        }
    }),
    home: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'tkblogkim',
        metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
        key: (req, file, cb) => {
            cb(null, `imgs/home/${Date.now()} ${file.originalname}`);
        }
    }),
    car: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'tkblogkim',
        metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
        key: (req, file, cb) => {
            cb(null, `imgs/cars/${Date.now()} ${file.originalname}`);
        }
    }),
}
