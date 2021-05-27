module.exports = (mongoose) => {
const CatsSchema = new mongoose.Schema({
    url: {type:String},
});
    mongoose.model("cat", CatsSchema);
}
