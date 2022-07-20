//puzzle routes backend

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Puzzle = require("../../models/Puzzle.js");
const validatePuzzleInput = require("../../validation/puzzles.js");

//get entire library of puzzles

// router.get("/", (request, response) => {
//   Puzzle.find()
//     .sort({ creator_id: request.params.user_id })
//     .then((puzzles) => response.json(puzzles))
//     .catch((err) =>
//       response.status(404).json({ noPuzzlesFound: "No Puzzles found" })
//     );
// });

//get users puzzles

router.get("/user/:user_id", (request, response) => {
  Puzzle.find({ creator_id: request.params.user_id })
    // .sort({ creator_id: request.params.user_id })
    .then((puzzles) => response.json(puzzles))
    .catch((err) =>
      response
        .status(404)
        .json({ noPuzzlesFound: "No Puzzles found for that User" })
    );
});





//get a specific user puzzles
// router.get("/user/:user_id/:puzzle_id", (request, response) => {
//   Puzzle.findById(request.params.puzzle_id)
//     // .sort({ creator_id: request.params.user_id })
//     .then((puzzles) => response.json(puzzles))
//     .catch((err) =>
//       response
//         .status(404)
//         .json({ noPuzzlesFound: "No Puzzles found for that User" })
//     );
// });

//seed route
// router.get("/puzzleseed")
// /api/puzzles/#

//get a puzzle by its own id
//h

router.get("/:id", (request, response) => {
  Puzzle.findById(request.params.id)
    .then((puzzle) => response.json(puzzle))
    .catch((err) =>
      response
        .status(404)
        .json({ puzzleNotFound: "No Puzzle found with that id" })
    );
});

router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (request, response) => {
    const { errors, isValid } = validatePuzzleInput(request.body);

    if (!isValid) {
      return response.status(400).json(errors);
    }

    const newPuzzle = new Puzzle({
      title: request.body.title,
      //creator_id: request.user.id,
      original_img_url: request.body.original_img_url,
      tile_data: request.body.tile_data,
      size: request.body.size,
      difficulty: request.body.difficulty,
      //additons @ 7/19/2022
      creator_id: request.body.creator_id,
      genre: request.body.genre

    });

    newPuzzle.save().then((puzzle) => response.json(puzzle));
  }
);

router.get("/themes/:genre", (request, response) => {
  console.log(request.params.genre)
  Puzzle.find({ genre: request.params.genre })
    .then((puzzles) => response.json(puzzles))
    .catch((err) =>
      response.status(404).json({ noPuzzlesFound: "No Puzzles found for that Theme" })
    );
});

module.exports = router;
