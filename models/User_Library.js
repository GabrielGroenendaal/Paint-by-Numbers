const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserLibrarySchema = new Schema({})



const UserLibrary = mongoose.model('user_libraries', UserLibrarySchema);
module.exports = UserLibrary;
