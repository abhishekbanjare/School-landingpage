import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import SchoolLandingPage from "./components/SchoolLandingPage";
// import ChairmanMessage from "./components/about/ChairmanMessage";
// import PrincipalMessage from "./components/about/PrincipalMessage";
// import PrePrimary from "./components/academics/PrePrimary";
// import MiddleSchool from "./components/academics/MiddleSchool";
// import Curriculum from "./components/curriculum/Curriculum";
// import AdmissionProcedure from "./components/admission/AdmissionProcedure";
// import AdmissionForm from "./components/admission/AdmissionForm";
// import LatestOpenings from "./components/career/LatestOpenings";
// import Recruitment from "./components/career/Recruitment";
import Gallery from "./components/gallery/Gallery";
import ContactPage from "./components/contacts/ContactPage";
import Acadmics from "./components/academics/Acadmics";
import Curriculum from "./components/curriculum/Curriculum";
import Admission from "./components/admission/Admission";
import Career from "./components/career/Career";
import Scholarship from "./components/scholarship/Scholarship";
import PageNotFound from "./components/notFound/PageNotFound";
import About from "./components/about/About";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Routes>
        {/* Define routes as per the Navbar's `navLinks` array */}
        <Route path="/" element={<SchoolLandingPage />} />

        {/* About us */}
        <Route path="/chairman-message" element={<About />} />
        <Route path="/principal-message" element={<About />} />

        {/* Acadmics */}
        <Route path="/pre-primary" element={<Acadmics />} />
        <Route path="/middle-school" element={<Acadmics />} />

        <Route path="/curriculum" element={<Curriculum />} />

        {/* Addmission */}
        <Route path="/admission-procedure" element={<Admission />} />
        <Route path="/admission-form" element={<Admission />} />

        <Route path="/gallery" element={<Gallery />} />

        {/* Carrer */}
        <Route path="/latest-openings" element={<Career />} />
        <Route path="/recruitment" element={<Career />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/scholarship" element={<Scholarship />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
