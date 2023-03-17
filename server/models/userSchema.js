const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    profession:{
        type:String,
        require:true,

    }
})
 
const user = mongoose.model('USERS',userSchema);

module.exports = user;