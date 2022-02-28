const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaderBoardSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
    points:{
        type:Number,
        default:0
    }

});
const LeaderBoard = mongoose.model("leaderboard", LeaderBoardSchema);
module.exports = LeaderBoard;
