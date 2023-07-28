const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: { type: String, required: true, min: 5, max: 20 },
    email: { type: String, required: true, unique: true, max: 20 },
    password: { type: String, required: true, minlength: 6 },
    phoneNumber: { type: String, required: true, minlength: 10 },
    userPicture: {
      type: String,
      default:
        "https://media.licdn.com/dms/image/D4D03AQFLDbd2Q3S3rw/profile-displayphoto-shrink_200_200/0/1682174426569?e=1695859200&v=beta&t=KkWYX4_bhx1qUvYYx_xggsKS3orm7N1S4PsFEZ5M9Pg",
    },
    picturePath: { type: String, default: "avatar.png" },
    location: { type: String },
    occupation: { type: String },
    totalOrders: { type: Number },
    totalTips: { type: Number },
    likedResturants: [
      {
        resturantId: { type: String },
        resturantName: { type: String },
        resturantPic: { type: String },
      },
    ],
    orders: [{ type: String }],
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
