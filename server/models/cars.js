module.exports = (mongoose) => {
const CarsSchema = new mongoose.Schema({
    url: {type:String},
});
    mongoose.model("car", CarsSchema);
}
