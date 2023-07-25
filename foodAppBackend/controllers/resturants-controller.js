const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Resturant = require("../models/resturants");

const createResturant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    name,
    description,
    picture,
    backdrop,
    category,
    rating,
    location,
    menu,
  } = req.body;
  const createdResturant = new Resturant({
    name,
    description,
    picture,
    backdrop,
    category,
    rating,
    location,
    menu,
  });

  try {
    await createdResturant.save();
  } catch (err) {
    const error = new HttpError(
      "Creating resturant failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({
    message: "Created resturant successfully",
    movie: createdResturant.toObject({ getters: true }),
  });
};

const getResturant = async (req, res, next) => {
  const qNew = req.query.new;
  const qRating = req.query.rating;
  const qcategory = req.query.category;
  const qsearch = req.query.search;

  let resturants;
  try {
    if (qNew) {
      resturants = await Resturant.find().sort({ release_date: 1 });
    } else if (qRating) {
      resturants = await Resturant.find().sort({ rating: -1 });
    } else if (qcategory) {
      resturants = await Resturant.find({
        category: {
          $in: [qcategory],
        },
      });
    } else if (qsearch) {
      var regex = new RegExp(qsearch, "i");
      resturants = await Resturant.find({
        name: regex,
      }).sort({ name: 1 });
    } else {
      resturants = await Resturant.find({});
    }
  } catch (err) {
    const error = new HttpError(
      "Fetching resturants failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json({
    resturants: resturants.map((resturant) =>
      resturant.toObject({ getters: true })
    ),
  });
};

const getResturantById = async (req, res, next) => {
  const resturantId = req.params.id;

  let resturant;
  try {
    resturant = await Resturant.findById(resturantId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a resturant.",
      500
    );
    return next(error);
  }

  if (!resturant) {
    const error = new HttpError(
      "Could not find a resturant for the provided id.",
      404
    );
    return next(error);
  }

  res.status(200).json({ resturant: resturant.toObject({ getters: true }) });
};

exports.createResturant = createResturant;
exports.getResturant = getResturant;
exports.getResturantById = getResturantById;
