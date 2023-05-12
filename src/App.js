import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
}