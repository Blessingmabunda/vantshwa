import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/module/user/auth"; 
import LandingPAge from "./pages/public/landingPage";
import AboutUs from "./pages/public/aboutUs";
import Services from "./pages/public/services";
import Pricing from "./pages/public/pricing";
import ContactUs from "./pages/public/contactUs";
import SplashPage from "./pages/public/splash";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Home" element={<LandingPAge />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/" element={<SplashPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
