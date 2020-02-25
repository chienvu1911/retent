const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryModel = {
  name: {
    type: String,
    required: true
  }
};

const CateogorySchema = new Schema(categoryModel);
module.exports = mongoose.model("categories", CateogorySchema);
