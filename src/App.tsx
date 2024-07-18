import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs, Home,LiveTrainning,Training,Review,GetInTouch,Certification,BCCD,BCDE,TTIA,ReviewAll,TermAndCondition,PrivacyPolicy,Services,AcademicCollbration } from "./Page";
import { Signin,Sidebar,Dashboard } from "./components/Admin/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/LiveTrainning" element={<LiveTrainning />} />
      <Route path="/BCAD" element={<Training />} />
      <Route path="/BPCD" element={<BCCD />} />
      <Route path="/BCDE" element={<BCDE />} />
      <Route path="/BCDE" element={<BCDE />} />
      <Route path="/TTIA" element={<TTIA />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/GetInTouch" element={<GetInTouch />} />
      <Route path="/Certification" element={<Certification />} />
      <Route path="/ReviewAll" element={<ReviewAll />} />
      <Route path="/TermAndCondition" element={<TermAndCondition />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/academicCollbration" element={<AcademicCollbration />} />
      <Route path="/admin-login" element={<Signin />} />
      <Route path="/admin-sidebar" element={<Sidebar />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
