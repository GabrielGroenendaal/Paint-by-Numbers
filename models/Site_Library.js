const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const SiteLibrarySchema = new Schema({})

const SiteLibrary = mongoose.model('site_libraries', SiteLibrarySchema);
module.exports = SiteLibrary;