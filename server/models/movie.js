const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  genre: [String],
  releaseYear: Number,
  director: String,
  cast: [String],
  poster: String, // URL or image path
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
