const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    productName: {
      type: String,
      lowercase: true,
    },
    productPrice: {
      type: Number,
    },
    productQuantity: {
      type: Number,
    },
    productNumber:{
      type: String,
    },
    productUploadBy:{
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);