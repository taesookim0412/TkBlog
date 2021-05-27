module.exports = (mongoose) => {
    const HomeSchema = new mongoose.Schema({
        url: {type: String}
    });
    mongoose.model("home", HomeSchema);
}