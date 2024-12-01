import React, { useState, useEffect } from "react";

const CourseForm = ({ currentCourse, onSave }) => {
    const [course, setCourse] = useState({ name: "", price: "", image: "" });

    useEffect(() => {
        if (currentCourse) {
            setCourse(currentCourse);
        }
    }, [currentCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(course);
        setCourse({ name: "", price: "", image: "" });
        console.log(course);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Course Name"
                value={course.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Course Price"
                value={course.price}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={course.image}
                onChange={handleChange}
                required
            />
            <button type="submit">{currentCourse ? "Update" : "Add"} Course</button>
        </form>
    );
};

export default CourseForm;
