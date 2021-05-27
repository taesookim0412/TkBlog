module.exports = (mongoose) => {
    const AccountSchema = new mongoose.Schema({
        user: {type: String},
        pass: {type: String}
    });
    mongoose.model("accounts", AccountSchema);
}