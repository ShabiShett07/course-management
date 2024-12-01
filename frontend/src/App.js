import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import CoursesPage from "./pages/coursePages";

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<h2>Welcome to Course Management</h2>} />
            <Route path="/courses" element={<CoursesPage />} />
        </Routes>
    </Router>
);

export default App;
