module.exports = (mongoose) => {
    const DogsSchema = new mongoose.Schema({
        url: {type:String},
    });
        mongoose.model("dog", DogsSchema);
    }
