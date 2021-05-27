module.exports = (mongoose, AutoIncrement) => {
    const BlogImgSchema = new mongoose.Schema({
        url: {type: String},
    });
    const BlogSchema = new mongoose.Schema({
        title: {type: String},
        preview: {type: String},
        description: {type: String},
        imgs: [BlogImgSchema],
        date: {type: Date},
        created: {type: Date, default: Date.now()}
    });
    BlogSchema.plugin(AutoIncrement, {inc_field: 'bId'});
    mongoose.model("blogs", BlogSchema);

}