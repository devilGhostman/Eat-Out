const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resturantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 5,
      max: 20,
      unique: true,
    },
    description: { type: String, required: true, max: 20 },
    picture: { type: String },
    backdrop: { type: String },
    category: [{ type: String }],
    rating: { type: String },
    location: { type: String },
    reviews: [
      {
        usertId: { type: String },
        userRating: { type: String },
        userReview: { type: String },
      },
    ],
    menu: [
      {
        dishName: { type: String },
        dishPic: { type: String },
        dishRating: { type: String },
        dishPrice: { type: String },
      },
    ],
    orders: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resturant", resturantSchema);
