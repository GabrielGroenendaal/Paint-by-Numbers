const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgressOnPuzzleSchema = new Schema({});

const ProgressOnPuzzle = mongoose.model('progress_on_puzzles', ProgressOnPuzzleSchema);
module.exports = ProgressOnPuzzle;
