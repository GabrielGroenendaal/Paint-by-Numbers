//puzzle routes backend

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Puzzle = require("../../models/Puzzle.js");
const validatePuzzleInput = require("../../validation/puzzles.js");

router.get("/", (request, response) => {
  Puzzle.find()
    .sort({ creator_id })
    .then((puzzles) => response.json(puzzles))
    .catch((err) =>
      response.status(404).json({ noPuzzlesFound: "No Puzzles found" })
    );
});

//get users puzzles

router.get("/user/:user_id", (request, response) => {
  Puzzle.find({ user: request.params.user_id })
    .sort({ creator_id })
    .then((puzzles) => response.json(puzzles))
    .catch((err) =>
      response
        .status(404)
        .json({ noPuzzlesFound: "No Puzzles found for that User" })
    );
});

router.get("/", (request, response) => {
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
  passport.authenticate("jwt", { session: false }),
  (request, response) => {
    const { errors, isValid } = validatePuzzleInput(request.body);

    if (!isValid) {
      return response.status(400).json(errors);
    }

    const newPuzzle = new Puzzle({
      title: request.body.title,
      creator_id: request.user.id,
      original_img_url: request.body.original_img_url,
      tile_data: request.body.tile_data,
      size: request.body.size,
      difficulty: request.body.difficulty,
    });

    newPuzzle.save().then((puzzle) => response.json(puzzle));
  }
);

module.exports = router;
