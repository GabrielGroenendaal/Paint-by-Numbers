const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys.js").mongoURI;

//yet to be created fully
const users = require("./routes/api/users.js");
const User = require("./models/User.js");
const bodyParser = require("body-parser");
const passport = require("passport");
const puzzles = require("./routes/api/puzzles.js");
const Puzzle = require("./models/Puzzle.js");
const ProgressOnPuzzle = require('./models/Progress_on_Puzzle')
const progresses = require("./routes/api/progresses.js")
const path = require('path');
const cors = require("cors");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(passport.initialize());
require("./config/passport.js")(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


// defeat CORS
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

//this is a test
app.get("/", (request, response) => {
  response.send("yeerrrrrr routes be working !!!!");
});

app.use("/api/users", users);

//for users to creaate a puzzle of their own
app.use("/api/puzzles", puzzles);
app.use("/api/progresses", progresses);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



//at this point node.js is too dumb to know about any new changes so we use nodedemon to
// retransplie changes like webpack does or atleast tries to do .
