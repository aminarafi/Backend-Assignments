const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    _productId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Product"
    },
    _customerId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
    paidAmount: {
      type: Number,
    },
    orderStatus:{
      type: String,
    },
    orderNumber:{
        type: Number,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);