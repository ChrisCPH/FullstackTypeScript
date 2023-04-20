import mongoose from 'mongoose';
import Review from '../models/reviewModel';

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'A car must have a make'],
    trim: true,
  },
  model: {
    type: String,
    required: [true, 'A car must have a model'],
    trim: true,
  },
  year: {
    type: Number,
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    enum: ['red', 'blue', 'black', 'white', 'yellow', 'green'],
    message: 'Color is either: red, blue, black, white, yellow, green',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // Don't show this field in the response
  },
  // reviews: Array,
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// carSchema.pre('save', async function(next) {
//   const reviewsPromises = this.reviews.map(id => Review.findById(id));
//   this.reviews = await Promise.all(reviewsPromises);
//   next();
//
// });

// carSchema.pre(/^find/, function() {
//   this.populate({
//     path: 'reviews',
//     select: '-__v -createdAt',
//   })
// })

carSchema.virtual('discount').get(function() {
  return this.price * 0.25;
});

const Car = mongoose.model('Car', carSchema);

export default Car;
