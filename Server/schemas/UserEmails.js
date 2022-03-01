const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmailSchema = new Schema({
	email: {
		type: String,
		required: true,
        unique:true
	},
	referalID:{
        type: String,
        required: true,
        unique: true
    }
});
const Email = mongoose.model("emails", EmailSchema);
module.exports = Email;
