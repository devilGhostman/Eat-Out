const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const {
    userName,
    email,
    password,
    userPicture,
    phoneNumber,
    location,
    occupation,
    picturePath,
  } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }
  // console.log(req.body);
  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const createdUser = new User({
    userName,
    email,
    password: hashedPassword,
    phoneNumber,
    userPicture,
    location,
    occupation,
    totalOrders: Math.floor(Math.random() * 100),
    totalTips: Math.floor(Math.random() * 1000),
    picturePath,
  });

  // console.log(createdUser);

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser, isValidPassword;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  }

  if (!existingUser || !isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  const token = jwt.sign(
    { id: existingUser._id, admin: existingUser.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "1 day",
    }
  );
  existingUser.password = "";
  res.status(200).json({
    message: "Logged in!",
    token,
    existingUser,
  });
};

const getUser = async (req, res, next) => {
  // console.log(req.user);  coming from verify middleware use it to check
  const userId = req.params.id;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a User.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      "Could not find a user for the provided id.",
      404
    );
    return next(error);
  }

  user.password = "";

  res.status(200).json({ user: user.toObject({ getters: true }) });
};

exports.signup = signup;
exports.login = login;
exports.getUser = getUser;
