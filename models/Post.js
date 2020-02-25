const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = {
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments"
    }
  ],
  tags: [
   {
     type: Schema.Types.ObjectId,
     ref: "tags"
   }
 ]
};

const PostSchema = new Schema(post);

module.exports = mongoose.model("posts", PostSchema);
