//user routes

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User.js");
const keys = require("../../config/keys.js");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// import validation functions
const validateRegisterInput = require("../../validation/register.js");
const validateLoginInput = require("../../validation/login.js");

//test route to see if routes are working

router.get("/test", (request, response) => {
  response.json({ msg: "This is the users routes being called" });
});

//test route to see if login is successful

router.get(
  "/current",
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

//   conditon to validate unique emails only flag error if email is already registered;
//   User.findOne({ email: request.body.email }).then((user) => {
//   if (user) {
//   throw a status : 400 error if the email address already exists
//   return response.status(400).json({
//   email: "A User has already registered with this email address",
//   });
//   }
//   we are not using emails for this app

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
            .then((user) => response.json(user))
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

