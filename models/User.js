const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = {
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "posts"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments"
    }
  ]
};

const UserSchema = new Schema(userModel);
module.exports = mongoose.model("users", UserSchema);
