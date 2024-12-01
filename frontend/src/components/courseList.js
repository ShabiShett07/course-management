import React from "react";

const CourseList = ({ courses, onEdit, onDelete }) => (
    <div>
        {courses.map((course) => (
            <div key={course._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <h3>{course.name}</h3>
                <p>Price: ${course.price}</p>
                <img src={course.image} alt={course.name} style={{ width: "200px" }} />
                <button onClick={() => onEdit(course)}>Edit</button>
                <button onClick={() => onDelete(course._id)}>Delete</button>
            </div>
        ))}
    </div>
);

export default CourseList;
