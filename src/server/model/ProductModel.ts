import { Schema, model, Types } from "mongoose";

const ProductSchema = new Schema({
  name: { type: Schema.Types.String },
  description: Schema.Types.String,
  pricing: Schema.Types.Number,
});

export default model("Product", ProductSchema, "products");
