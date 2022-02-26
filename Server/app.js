const express = require("express");
const connection = require("./config/connection");
const userRouter = require("./routes/users");
const studentRouter = require("./routes/students");
const authRouter = require("./routes/auth");
var passport = require("passport");
const fileUpload = require("express-fileupload");

const cors = require("cors");
const logger = require("morgan");

const app = express();
require("dotenv").config();
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connection(); //establishing database connection

// app.use(
//   session({
//     name: "cui-gp-portal",
//     secret: "12345-67890-09876-54321",
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore(),
//   })
// );
app.use(passport.initialize());
// app.use(passport.session());
app.use(fileUpload());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/students", studentRouter);

//Server listening
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
