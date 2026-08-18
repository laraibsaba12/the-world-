import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ITCourses from "./Pages/ITCourses";
import Admission from "./Pages/Admission";
import Trainers from "./Pages/Trainers";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<ITCourses />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}