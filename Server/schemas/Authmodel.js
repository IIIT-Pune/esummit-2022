const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		select: false
	},

	date: {
		type: Date,
		default: Date.now,
	},
	referalID:{
        type: String,
        required: true,
        unique: true
    }
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
