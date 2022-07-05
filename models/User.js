const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
//remove email as we will not be needing email for sign up 

const UserSchema = new Schema({


    username: {
            type: String,
            required: true
    },
    //profile pic ????

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

},

{
    timestamps:true
}

)




const User = mongoose.model('users', UserSchema);
module.exports = User;


