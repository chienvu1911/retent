// ExpressJS là một Web Application Framework, dòng code này nói rằng bạn muốn sử dụng nó.
const express = require("express");
const passport = require("passport");
const router = express.Router(); 
const Post = require("../../models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // for loading environment variables
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// Tạo một đối tượng Express.
var app = express();
const PORT = process.env.PORT || 1911;
const MONGO_URI = process.env.MONGO_URI;
const SECRET = process.env.SECRET; 

const validateSignUpInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const validatePostInput = require("../../validation/post");
passport.authenticate('jwt', {session:false})
const User = require("../../models/User");
router.post("/signup", (req, res) => {
    const { errors, isValid } = validateSignUpInput(req.body);
    const { user_name, email, password } = req.body;
    if (!isValid) {
       return res.status(400).json(errors);
    }
    User.findOne({ $or: [{ email }, { user_name }] }).then(user => {
       if (user) {
          if (user.email === email)
             return res.status(400).json({ email: "Email already exists" });
          else
             return res
                .status(400)
                .json({ user_name: "Username already exists" });
       } else {
          const newUser = new User({ user_name, email, password });
          // hashing password before storing it in database
          bcrypt.genSalt(10, (err, salt) => {
             bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                   .save()
                   .then(user => res.json(user))
                   .catch(err =>
                      console.log({ error: "Error creating a new user" })
                   );
             });
          });
       }
    });
 });
 
 router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
       return res.status(400).json(errors);
    }
    const { email, password } = req.body;
    User.findOne({ email }).then(user => {
       if (!user) {
          return res.status(404).json({ email: "Email not found" });
       }
 
       bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
             const payload = {
                id: user.id,
                user_name: user.user_name
             };
             jwt.sign(payload, SECRET, { expiresIn: 3600 }, (err, token) => {
                if (err) {
                   console.log(err);
                }
                return res.json({
                   success: true,
                   token: "Bearer " + token
                });
             });
          } else {
             return res.status(400).json({ password: "Password Incorrect" });
          }
       });
    });
 });
 
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(() => console.log("Mongo Connection successful"))
.catch(err => console.log("err"));

// https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/users/", require("./routes/api/users"));
// Định nghĩa đường dẫn để truy cập vào một trang.
app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// Ứng dụng của bạn khi được triển khai, nó sẽ lắng nghe trên cổng (port) 1911.
app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});

