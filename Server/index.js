require("dotenv").config();
const connectToMongo = require("./DB");
const express = require("express");
var cors = require("cors");
const LeaderBoardRouter = require("./routes/Leaderboard");
connectToMongo();
const app = express();
const port =process.env.PORT || "5000";

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/Authroute"));
app.use("/api/leaderboard", LeaderBoardRouter);

app.listen(port, () => {
	console.log(`iNotebook backend listening at http://localhost:${port}`);
});
