require("dotenv").config();
const connectToMongo = require("./DB");
const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const LeaderBoardRouter = require("./routes/Leaderboard");
connectToMongo();
const app = express();
const port = process.env.PORT || "5000";
const Scrapp = require("./scrapping/d2c");
app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
// Available Routes
app.use("/api/auth", require("./routes/Authroute"));
app.use("/api/leaderboard", LeaderBoardRouter);
app.post("/api/scrapp", async (req, res) => {
	const { data } = req.body;
	if (!data) {
		res.status(400).send("data not found");
	}
	await Scrapp(data);
	res.status(200).send("Updated");
});

app.listen(port, () => {
	console.log(`iNotebook backend listening at http://localhost:${port}`);
});
