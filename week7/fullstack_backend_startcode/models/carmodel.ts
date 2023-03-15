import mongoose, {Schema} from "mongoose";

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, "A car has to have a model"],
        trim: true,
        maxLength: [20, "A car model must have less or equal 20 characters"],
        minLength: [2, "A car model must have more or equal 2 characters"]
    },
    year: Number, //Hvis man kun vil definere type
    price: Number,
    color: {
        type: String,
        enum: ['red','blue','black','white','yellow','green'],
        message: 'Color is either: red, blue, black, white, yellow or green',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    }
});

const Car = mongoose.model('Car', carSchema);

export default Car;