const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  commonName: { type: String, required: true },
  height: String,
  spacing: String,
  notes: String,
  habitat: String,
  flowering: Array,
  sun: Array,
  soil: Array,
  water: Array,
  images: Object,
  insects: Array,
  date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
