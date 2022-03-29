const express = require("express");
const connection = require("./config/connection");
const multer = require("multer");
const userRouter = require("./routes/users");
const studentRouter = require("./routes/students");
const gacRouter = require("./routes/gac");
const authRouter = require("./routes/auth");
var passport = require("passport");
const path = require("path");

const cors = require("cors");
const logger = require("morgan");

const app = express();
require("dotenv").config();
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connection(); //establishing database connection

//multer setup for uploading Files
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("synopsisDocument");

app.use("/upload", (req, res) => {
  upload(req, res, function (err) {
    console.log(req.body);
    console.log(req.files);
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(500).json(err);
    } else if (err) {
      console.log(err);

      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });
});

// app.use(
//   session({
//     name: "cui-gp-portal",
//     secret: "12345-67890-09876-54321",
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore(),
//   })
// );
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
// app.use(passport.session());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/students", studentRouter);
app.use("/gac", gacRouter);

//Server listening
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
