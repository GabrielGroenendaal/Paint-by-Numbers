const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedPuzzleSchema = new Schema({
    
});

const SavedPuzzle = mongoose.model('saved_puzzles', SavedPuzzleSchema);
module.exports = SavedPuzzle;
