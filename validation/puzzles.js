const Validator = require("validator");
const validText = require("./valid-text.js");

module.exports = function validatePuzzleInput(data) {
  let errors = {};
  data.title = validText(data.title) ? data.title : "";
  data.difficulty = validText(data.difficulty) ? data.difficulty : "";
  data.size = validText(data.size) ? data.size : "";

  if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
    errors.title = "Puzzle Title must be between 5 and 50 characters in length";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Puzzle Title Field required";
  }

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "Puzzle difficulty required";
  }

  if (Validator.isEmpty(data.size)) {
    errors.size = "Puzzle size required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
