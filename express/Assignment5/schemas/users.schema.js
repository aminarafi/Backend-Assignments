const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      lowercase: true,
    },
    lastName: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    city: {
      type: String,
    },
    state:{
      type: String,
    },
    zipCode:{
      type: Number,
    },
    status:{
      type: String,
    },
    userType: {
      type: String,
    },
    payment:{
      type: Array,
      cardNumber: {
        type: Number,
      },
      cardstatus: {
        type: String,
      }, 
      CVV: {
        type: Number,
        unique: true,
      },
    },
    
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);

// {
//   "firstName": "Hamna",
//   "lastName": "Ali",
//   "email":"hamna12@gmail.com",
//   "phoneNumber": 928787878,
//   "city": "Gujranwala",
//   "state": "Pakistan",
//   "zipCode": 53202,
//   "status" : "active",
//   "userType": "admin",
//   "payment":[{
//   "cardNumber": 421232349839842,
//   "cardStatus": "Active",
//   "cvv": 123
//   }]
// }