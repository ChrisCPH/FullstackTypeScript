import mongoose from 'mongoose';
import slugify from 'slugify';

const mechanicSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: [true, 'A mechanic must have a first name'],
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, 'A mechanic must have a last name'],
    },
    email: {
      type: String,
      validate: {
        validator: function(email: string) {
          return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
        },
        message: (props: { value: string; }) => `${props.value} is not a valid email address`,
      },
      required: [true, 'Email address validation failed'],
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ['mechanic-intern', 'mechanic', 'lead-mechanic', 'admin'],
      default: 'mechanic',
    },
    password: {
      type: String,
      require: [true, 'Please provide a password'],
      minlength: [8, 'A password must have more or equal then 8 characters'],
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'A mechanic must be assigned to a car.']
    },
    slug: String
  },
);

mechanicSchema.pre('save', function(next) {
  this.slug = slugify(this.firstname + this.lastname, {lower: true});
  next();
})

mechanicSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'car'
  })
  next();
});

// DOCUMENT MIDDLEWARE. runs after .save() and .create()
mechanicSchema.post('save', function(doc, next) {
  console.log(doc);
  next();
})

const Mechanic = mongoose.model('Mechanic', mechanicSchema);

export default Mechanic;
