import mongoose from 'mongoose';
import Course from '../models/courses.js';

export const getCourses = async (req, res) => {
    try{
        const courses = await Course.find({});
        res.status(200).json({success:true, data: courses});
    }catch(err){
        console.error("Error in fetching courses", err.message);
        res.status(500).json({success:false, message: "Server error"});
    }
}

export const postCourse = async (req, res) => {
    const course = req.body;

    if(!course.name || !course.price || !course.image){
        return res.status(400).json({message:"Please provide required fields"});
    }

    const newCourse = new Course(course);

    try {
        await newCourse.save();
        res.status(201).json({success: true, data: newCourse});
    } catch (err) {
        console.error("Error in creating product", err.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateCourse  = async (req, res) => {
    const {id} = req.params;
    console.log("ID:", id);
    const product  = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message:"Invalid Product ID"});
    }

    try{
        const updatedProduct = await Course.findByIdAndUpdate(id, product,{new: true});
        res.status(200).json({success:true, data: updatedProduct});
    }catch(err){
        console.error("Error in updating the product",err.message);
        res.status(500).json({success:false, message:"Server error"});
    }
}

export const deleteCourse = async (req, res) => {
    const {id} = req.params;
    console.log("ID:",id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message:"Invalid Product ID"});
    }
    try {
        await Course.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch(err){
        console.error("Error in deleting the product",err.message);
        res.status(500).json({success:false, message:"Server error"});
    }
};