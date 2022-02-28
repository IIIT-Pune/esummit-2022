const express = require("express");
const LeaderBoard = require("../schemas/leaderboard");
const router = express.Router();

router.get("/", (req, res) => {
	LeaderBoard.find().sort({points:-1})
		.then((obj) => {
			res.status(200).send(obj);
		})
		.catch((err) => {
			res.status(400).send({ error: "Server Error Occurred" });
		});
});

module.exports = router;
