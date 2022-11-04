const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    isMarried: {
      type: Boolean,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);