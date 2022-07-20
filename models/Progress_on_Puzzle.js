const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ProgressOnPuzzleSchema = new Schema({
      user_id: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true
      },

      puzzle_id: {
            type: Schema.Types.ObjectId,
            ref: "puzzles",
            required: true
      },

      progress_data: {
            type: String,
            required: true
      }

    
});

const ProgressOnPuzzle = mongoose.model('progress_on_puzzles', ProgressOnPuzzleSchema);
module.exports = ProgressOnPuzzle;
