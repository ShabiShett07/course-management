import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/coursepage" });

export const fetchCourses = () => API.get("/");
export const createCourse = (course) => API.post("/", course);
export const updateCourse = (id, course) => API.put(`/${id}`, course);
export const deleteCourse = (id) => API.delete(`/${id}`);
