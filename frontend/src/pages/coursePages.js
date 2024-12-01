import React, { useState, useEffect } from "react";
import { fetchCourses, createCourse, updateCourse, deleteCourse } from "../api";
import CourseList from "../components/courseList";
import CourseForm from "../components/courseForm";

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [currentCourse, setCurrentCourse] = useState(null);

    const loadCourses = async () => {
        try {
            const { data } = await fetchCourses();
            setCourses(data.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    const handleSave = async (course) => {
        try {
            if (currentCourse) {
                await updateCourse(currentCourse._id, course);
            } else {
                await createCourse(course);
            }
            loadCourses();
            setCurrentCourse(null);
        } catch (error) {
            console.error("Error saving course:", error);
        }
    };

    const handleEdit = (course) => {
        setCurrentCourse(course);
    };

    const handleDelete = async (id) => {
        try {
            await deleteCourse(id);
            loadCourses();
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };

    return (
        <div>
            <CourseForm currentCourse={currentCourse} onSave={handleSave} />
            <CourseList courses={courses} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default CoursesPage;
