import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "posts"
  }
});

export default mongoose.model("comments", CommentSchema);
