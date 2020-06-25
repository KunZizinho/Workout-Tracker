
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workOutSchema = new Schema(
    {
        day:{
            type: Date,
            default: () => new Date()
        },
        exercises: [{
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            duration: {
                type: Number,
                required: "Enter exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }]
    },
    {
        toJSON: {
            // we need to include any virtual properties when data is requested
            virtuals: true
        }
    }
);

// we are gonna dynamically create property and add that property to schema
workOutSchema.virtual("totalDuration").get(function (){
    // reduce exercises array down to sum of their durations
    return this.exercises.reduce((total, exercise) =>{
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workOutSchema);
module.exports = Workout;