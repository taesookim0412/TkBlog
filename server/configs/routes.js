const accounts = require('./../controllers/accounts.js');
const uploads = require('./../controllers/uploads.js');
const api = require('./../controllers/api.js');

module.exports = (app) => {
    // Create User
    app.post("/account/create", (req, res) => {
        accounts.create(req, res);
    })
    app.post("/account", (req, res) => {
        accounts.login(req, res);
    });
    app.post("/upload/blog", (req, res) => {
        uploads.createPost(req, res);
    });
    app.put("/upload/blog", (req, res) => {
        uploads.editPost(req, res);
    });
    app.post("/upload/cats", (req, res) => {
        uploads.createCats(req, res);
    });
    app.post("/upload/cars", (req, res) => {
        uploads.createCars(req, res);
    });
    app.post("/upload/dogs", (req, res) => {
        uploads.createDogs(req, res);
    });
    app.post("/upload/changehome", (req, res) => {
        uploads.setHome(req, res);
    });
    app.get("/upload/contact", (req, res) => {
        uploads.getContact(req, res);
    });
    app.get("/upload/contact/:id", (req, res) => {
        uploads.getContactById(req, res);
    });
    //Delete
    app.post("/upload/cats/delete/:id", (req, res) => {
        uploads.deleteCats(req, res);
    });
    app.post("/upload/cars/delete/:id", (req, res) => {
        uploads.deleteCars(req, res);
    });
    app.post("/upload/dogs/delete/:id", (req, res) => {
        uploads.deleteDogs(req, res);
    });

    //POST
    app.post("/api/contact", (req, res) => {
        api.postContact(req, res);
    });
    //GET
    app.get("/api/blog", (req, res) => {
        api.getBlog(req, res);
    });
    app.get("/api/blog/:id", (req, res) => {
        api.getBlogEntry(req, res);
    });
    app.get("/api/home", (req, res) => {
        api.getHome(req, res);
    });
    app.get("/api/archive", (req, res) => {
        api.getBlogEntries(req, res);
    });
    app.get("/api/cats", (req, res) => {
        api.getCats(req, res);
    });
    app.get("/api/dogs", (req, res) => {
        api.getDogs(req, res);
    });
    app.get("/api/cars", (req, res) => {
        api.getCars(req, res);
    });


}
