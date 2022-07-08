const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PuzzleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // creator_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: "users",
    // },

    original_img_url: {
      type: String,
      required: true,
    },

    tile_data: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Puzzle = mongoose.model("puzzles", PuzzleSchema);
module.exports = Puzzle;

