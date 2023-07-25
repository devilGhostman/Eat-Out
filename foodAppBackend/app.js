const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");

const userRoutes = require("./routes/user-routes");
const resturantRoutes = require("./routes/resturant-routes");

app.use("/userProfile", express.static("userProfile"));

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use("/api/users", userRoutes);
app.use("/api/resturants", resturantRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    server.listen(process.env.PORT_NO || 5000, () => {
      console.log("SERVER IS RUNNING");
    });
  })
  .catch((err) => {
    console.log(err);
  });
