import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import OffersForYou from "../Flight/Flights";
import "../styles/Navbar.css";
import Flights from "../Flight/Flights";
import Hotels from "../Hotels/Hotels";
import Trains from "../Train/Trains";
import Cabs from "../pages/Cabs";
import Bus from "../Bus/Bus";
import Holidays from "../pages/Holidays";
import Forex from "../pages/Forex";
import BasicModal from "../Auth/LoginModal";
import SignupModal from '../Auth/SignupModal';
import SearchFlightData from '../search/SearchFlightData';
import Footer from "../pages/Footer";
import AuthProvider from "../Auth/AuthProvider";

function App() {




  return <div >
    <>
      <BrowserRouter>
        <Navbar />
        <AuthProvider>
          {/* <BasicModal />
          <SignupModal /> */}
        </AuthProvider>
        <Routes>
          <Route path="/" element={<Flights />}></Route>
          <Route path="/flights" element={<Flights />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
          <Route path="/trains" element={<Trains />}></Route>
          <Route path="/cabs" element={<Cabs />}></Route>
          <Route path="/bus" element={<Bus />}></Route>
          <Route path="/holidays" element={<Holidays />}></Route>
          <Route path="/forex" element={<Forex />}></Route>
          {/* <Route path="/login" element={<LoginModal />}></Route>
          <Route path="/signup" element={<SignupModal />}></Route> */}
          <Route path="/searchflight" element={<SearchFlightData />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  </div>;
}

export default App;
