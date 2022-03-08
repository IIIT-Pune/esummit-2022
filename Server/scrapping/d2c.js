const fs = require("fs");
const path = require("path");
const User = require("../schemas/Authmodel");
const LeaderBoard = require("../schemas/leaderboard");
async function main(data) {
	const referals = {};
	data.forEach((obj) => {
		if (obj.referalID.length >= 3) {
			if (referals[obj.referalID]) {
				referals[obj.referalID] = referals[obj.referalID] + 1;
			} else {
				referals[obj.referalID] = 1;
			}
		}
	});
	// console.log(referals);
	Object.entries(referals).forEach(async (obj) => {
		// console.log(obj);
		await User.findOne({ referalID: obj[0] })
			.then(async (user) => {
				if (user) {
					await LeaderBoard.findOne({ email: user.email })
						.then((lead) => {
							// console.log(user,lead.length);
							if (lead) {
								lead.points = obj[1] * 10;
								lead
									.save()
									.then((s) => {
										// console.log(s);
									})
									.catch((err) => {
										console.log(err);
									});
							}
						})
						.catch((err) => {
							console.log(err);
						});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	});
}

module.exports = main;
