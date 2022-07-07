const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SiteLibrarySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const SiteLibrary = mongoose.model("site_libraries", SiteLibrarySchema);
module.exports = SiteLibrary;

