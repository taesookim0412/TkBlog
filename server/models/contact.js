module.exports = (mongoose, AutoIncrement) => {
    const ContactSchema = new mongoose.Schema({
        date: {type: Date},
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        phone: {type: String},
        red: {type: Boolean},
        green: {type: Boolean},
        blue: {type: Boolean},
        comments: {type: String},
        createdAt: {type: Date, default: Date.now()}
    });
    ContactSchema.plugin(AutoIncrement, {inc_field: 'cId'});
    mongoose.model("contact", ContactSchema);
}
