const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            trim: true
        },
        
            lastName:{
                type: String,
                required: true,
                trim: true
            },
            userName:{
                type: String,
                unique: true
            },
            email:{
                type: String,
                unique: true
            },
            password:{
                type: String,
                unique: true
            },
            Bio:{
                type: String
            },
            dateOfBirth: {
                type: String
              },
              profilePath: {
                type: String
              }
        
    },
    {
        timestamps: true,
        strict: true,
        collection: 'users'
    }
  

)
module.exports =  mongoose.model('User', userSchema) ;