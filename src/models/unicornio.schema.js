import { Schema, model } from "mongoose";

const unicornioSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    power: {
      type: String,
      require: true,
      trim: true,
    },
    img: {
      type: String,
      require: true,
      trim: true,
    },
    age: {
      tipe: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Unicornio =  model("Unicornio", unicornioSchema)