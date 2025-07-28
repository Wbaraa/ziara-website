// src/App.js
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Signup from "./pages/Signup";
import Login  from "./pages/Login";
import AdditionalInfo from "./pages/AdditionalInfo";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Home carousel on "/" */}
          <Route path="/" element={<Carousel />} />

          {/* Signup page on "/signup" */}
          <Route path="/signup" element={<Signup />} />

          {/* AdditionalInfo page on "/additional-info" */}
          <Route path="/additional-info" element={<AdditionalInfo />} />

          {/* Signup page on "/login" */}
          <Route path="/login" element={<Login />} />

          {/* Redirect any unknown path back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
