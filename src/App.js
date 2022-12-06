import { Route, Routes, useNavigate } from "react-router-dom";
import Read from "../Components/Read";
import Home from "../Components/Home";
import Watch from "../Components/Watch";
import Feedback from "../Components/Feedback";
import Footer from "../Components/Footer";
export default function App() {
  // JAVASCRIPT GOES HERE
  // NAVIGATE
  // const navigate = useNavigate();

  // const navigateToRead = () => {
  //   // 👇️ navigate to /contacts
  //   navigate("/read");
  // };

  // HTML IS BELOW
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}
