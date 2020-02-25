const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategoryModel = {
  name: {
    type: String,
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  }
};

const SubCateogorySchema = new Schema(subcategoryModel);
module.exports = mongoose.model("subcategories", SubCateogorySchema);