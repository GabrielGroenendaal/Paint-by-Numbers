//user routes

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User.js");
const keys = require("../../config/keys.js");
const jwt = require("jsonwebtoken");
const passport = require("passport");
var ObjectId = require('mongoose').Types.ObjectId;

// import validation functions
const validateRegisterInput = require("../../validation/register.js");
const validateLoginInput = require("../../validation/login.js");
const { db } = require("../../models/User.js");

//test route to see if routes are working

router.get("/test", (request, response) => {
  response.json({ msg: "This is the users routes being called" });
});


//route to view a specific user

router.get("/user/:id", (request, response) => {
  User.findById(request.params.id)
    .then((user) => response.json(user))
    .catch((err) =>
      response
        .status(404)
        .json({ userNotFound: "No User exists with that id" }));
});


//user info updating routes
router.patch("/user/:id", (request, response) => {

  const updates = request.body
  // const puzzleUpdate = request.body.puzzles;

  if(ObjectId.isValid(request.params.id)){
    db.collection('users')
        .updateOne({_id: ObjectId(request.params.id)}, {$set: updates})
        .then(result => {
          response.status(200).json(result)
        })
        .catch(err=>{
          response.status(500).json({error: 'Could not update the user'})
        })
  }
  else{
    response.status(500).json({error: "invalid user id"});
  }
});



router.patch("/user/:id", (request, response) => {
  const updates = request.body
  const puzzleUpdate = request.body.puzzles;

  if(ObjectId.isValid(request.params.id)){
    db.collection('users')
        .updateOne({_id: ObjectId(request.params.id)}, {$set: updates})
        .then(result => {
          response.status(200).json(result)
        })
        .catch(err=>{
          response.status(500).json({error: 'Could not update the user'})
        })
  }
  else{
    response.status(500).json({error: "invalid user id"});
  }


});





//test route to see if login is successful
router.get(
  "/currentUser",
  passport.authenticate("jwt", { session: false }),
  (request, response) => {
    response.json({ msg: "user login successful!" });
  }
);

//user registration

router.post("/register", (request, response) => {
  const { errors, isValid } = validateRegisterInput(request.body);
  if (!isValid) {
    return response.status(400).json(errors);
  }

  User.findOne({
    username: request.body.username,
  }).then((user) => {
    if (user) {
      return response.status(400).json({
        username: "A User has already registered with this email or username",
      });
    } else {
      //other wise proceed to register the email

      const newUser = new User({
        username: request.body.username,
        password: request.body.password,
        puzzles : request.body.puzzles
      });

      //bcryptjs comes in here where we encrypt the password with blo:wfish algo
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }

          newUser.password = hash;
          newUser
            .save()
            .then((finalUser) => response.json(finalUser))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// route users to login with their credentials
router.post("/login", (request, response) => {
  const { errors, isValid } = validateLoginInput(request.body);
  if (!isValid) {
    return response.status(400).json(errors);
  }

  const username = request.body.username;
  const password = request.body.password;
  const puzzles = request.body.puzzles;

  // use bycrpt and password to look up said user for the inputted credentials
  // this one will check for the email findOne is self explanatory
  User.findOne({ username }).then((user) => {
    if (!user) {
      // if user email not found return json error response
      return response.status(404).json({ username: "This User does not exist" });
    }

    // user email must then exists using bcrypt to verifiy password

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //return response.json({msg: "Login Successful!"});
        //create and send jwt to user
        const payload = {
          id: user.id,
          username: user.username,
          puzzles: user.puzzles
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 36000 },
          (err, token) => {
            response.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        return response.status(400).json({ password: "Incorrect Password" });
      }
    });
  });
});

module.exports = router;

