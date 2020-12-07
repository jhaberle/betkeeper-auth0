const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/betslips", {
  useNewUrlParse: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const betslipSeed = [
  {
    team1: "Pit Steelers",
    team2: "Cle Browns",
    betinfo: "asdfasdf",
    odds: "Pit  -180",
    bettype: "moneyline",
    date: new Date(Date.now()),
  },
];

db.Betslip.remove({})
  .then(() => db.Betslip.collection.insertMany(betslipSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
