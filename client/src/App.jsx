import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "./App.css";
import Login from "./Login";
import NotFound from "./components/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AdmissionEnquiryForm from "./components/AdmissionEnquiryForm";

// Academy Pages
import About from "./components/the_academy/About";
import Mission from "./components/the_academy/Mission";
import Accreditation from "./components/the_academy/Accreditation";
import ChairpersonMessage from "./components/the_academy/ChairpersonMessage";
import PrincipleMessage from "./components/the_academy/PrincipleMessage";
import FounderMessage from "./components/the_academy/FoundersMessage";

// Academics Pages
import PrimaryWing from "./components/academics/methodology/PrimaryWing";
import MiddleWing from "./components/academics/methodology/MiddleWing";
import SeniorWing from "./components/academics/methodology/SeniorWing";
import HolisticDevelopment from "./components/academics/HolisticDevelopment";
import TechnologyIntegration from "./components/academics/TechnologyIntegration";
import GuidanceAndCounseling from "./components/academics/GuidanceAndCounseling";

// Admission Pages
import PrimaryWingAdmissionForm from "./components/admission/PrimaryWingAdmissionForm";
import MiddleWingAdmissionForm from "./components/admission/MiddleWingAdmissionForm";
import SeniorWingAdmissionForm from "./components/admission/SeniorWingAdmissionForm";
import TCRequest from "./components/admission/TCRequest";

// infrastructure
import Infrastructure from "./components/infrastructure/Infrastructure";
import Auditorium from "./components/infrastructure/Auditorium";
import LibraryComponent from "./components/infrastructure/LibraryComponent";
import SportsFacility from "./components/infrastructure/SportsFacility";
// import Canteen from "./components/infrastructure/Canteen";
import HealthClinic from "./components/infrastructure/HealthClinic";
import Security from "./components/infrastructure/Security";
import LearningCenter from "./components/infrastructure/LearningCenter";
import Transportation from "./components/infrastructure/Transportation";

// press
import CutOuts from "./components/press/CutOuts";
import Magazines from "./components/press/Magazines";

// vacancy
import AcademyVacancy from "./components/vacancy/AcademyVacancy";

// gallery
import ImageGallery from "./components/gallery/ImageGallery";

// ***admin control****
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./admin/PrivateRoute";

// VacancyDetails
import VacancyList from "./admin/vacancies/VacancyList";
import NewVacancy from "./admin/vacancies/NewVacancy";
import VacancyDetails from "./admin/vacancies/Details";

// tc panel
import TcPanel from "./admin/admission/tc_request/TcPanel";
import TcRequestDetails from "./admin/admission/tc_request/TcRequestDetails";

// gallery
import GalleryControl from "./admin/gallery/GalleryControl";
import GalleryForm from "./admin/gallery/GalleryForm";
import GalleryDetails from "./admin/gallery/Details";

// admission panel
import AdmissionPanel from "./admin/admission/AdmissionPanel";
import AdmissionDetails from "./admin/admission/AdmissionDetails";

// enquiry panel
import EnquiryPanel from "./admin/enquiry/EnquiryPanel";
import EnquiryDetails from "./admin/enquiry/EnquiryDetails";

function App() {
  const [showEnq, setShowEnq] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowEnq(true);
    }, 1500);
  }, []);
  return (
    <Router>
      <AuthProvider>
        <div className="h-screen overflow-scroll no-scrollbar mx-auto">
          <Navbar />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />

          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <div className="relative">
                  <Hero />
                  {showEnq && <AdmissionEnquiryForm setShowEnq={setShowEnq} />}
                </div>
              }
            />

            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Grouped Academy Routes */}
            <Route path="/academy">
              <Route path="about" element={<About />} />
              <Route path="mission" element={<Mission />} />
              <Route path="founder-message" element={<FounderMessage />} />
              <Route path="principal-message" element={<PrincipleMessage />} />
              <Route
                path="chairperson-message"
                element={<ChairpersonMessage />}
              />
              <Route path="accreditation" element={<Accreditation />} />
            </Route>

            {/* Grouped Academics Routes */}
            <Route path="/academics">
              <Route path="methodology">
                <Route path="primary" element={<PrimaryWing />} />
                <Route path="middle" element={<MiddleWing />} />
                <Route path="senior" element={<SeniorWing />} />
              </Route>
              <Route
                path="holistic-development"
                element={<HolisticDevelopment />}
              />
              <Route path="technology" element={<TechnologyIntegration />} />
              <Route
                path="guidance-counseling"
                element={<GuidanceAndCounseling />}
              />
            </Route>

            {/* Grouped Infrastructure Routes */}
            <Route path="/infrastructure">
              <Route path="auditorium" element={<Auditorium />} />
              <Route path="sports" element={<SportsFacility />} />
              <Route path="facilities">
                <Route path="transportation" element={<Transportation />} />
                {/* <Route path="canteen" element={<Canteen />} /> */}
                <Route path="health" element={<HealthClinic />} />
                <Route path="security" element={<Security />} />
              </Route>
              <Route path="library" element={<LibraryComponent />} />
              <Route path="overview" element={<Infrastructure />} />
              <Route path="learning-centre" element={<LearningCenter />} />
            </Route>

            {/* Grouped Admission Routes */}
            <Route path="/admissions">
              <Route path="apply">
                <Route path="primary" element={<PrimaryWingAdmissionForm />} />
                <Route path="middle" element={<MiddleWingAdmissionForm />} />
                <Route path="senior" element={<SeniorWingAdmissionForm />} />
              </Route>
              <Route path="tc-request" element={<TCRequest />} />
            </Route>

            <Route path="/press">
              <Route path="coverage" element={<CutOuts />} />
              <Route path="magazine" element={<Magazines />} />
            </Route>

            {/* vacancies */}
            <Route path="/vacancies" element={<AcademyVacancy />} />

            {/* gallery */}
            <Route path="/gallery" element={<ImageGallery />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={<PrivateRoute />}>
              <Route path="vacancies">
                <Route path="panel" element={<VacancyList />} />
                <Route path="new-vacancy" element={<NewVacancy />} />
                <Route path="details/:vacancy" element={<VacancyDetails />} />
              </Route>

              <Route path="tc-requests">
                <Route path="panel" element={<TcPanel />} />
                <Route path="details/:reqId" element={<TcRequestDetails />} />
              </Route>
              <Route path="gallery">
                <Route path="panel" element={<GalleryControl />} />
                <Route path="new-item" element={<GalleryForm />} />
                <Route path="details/:galleryId" element={<GalleryDetails />} />
              </Route>
              <Route path="admissions">
                <Route path="panel" element={<AdmissionPanel />} />
                <Route
                  path="details/:admissionId"
                  element={<AdmissionDetails />}
                />
              </Route>
              <Route path="enquiry">
                <Route path="panel" element={<EnquiryPanel />} />
                <Route path="details/:enqId" element={<EnquiryDetails />} />
              </Route>
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
