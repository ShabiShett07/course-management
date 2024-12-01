import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    price:{
        type: 'number',
        required: true
    },
    image:{
        type: 'string',
        required: true
    },
},{
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

export default Course;