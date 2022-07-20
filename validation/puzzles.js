const Validator = require("validator");
const validText = require("./valid-text.js");

module.exports = function validatePuzzleInput(data) {
  let errors = {};
  data.title = validText(data.title) ? data.title : "";
  data.difficulty = validText(data.difficulty) ? data.difficulty : "";
  data.size = validText(data.size) ? data.size : "";
  data.genre = validText(data.genre) ? data.genre : "";

  // if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
  //   errors.title = "Puzzle Title must be between 5 and 50 characters in length";
  // }

  // if (Validator.isEmpty(data.title)) {
  //   errors.title = "Puzzle Title Field required";
  // }

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "Puzzle difficulty required";
  }

  if (Validator.isEmpty(data.size)) {
    errors.size = "Puzzle size required";
  }

  if (Validator.isEmpty(data.genre)) {
    errors.size = "Puzzle Genre required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
