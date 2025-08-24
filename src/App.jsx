import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import HeroSlider from './Component/HeroSlider';
import Card from "./Component/Card";
import Aboutus from "./Component/Aboutus";
import Gallery from "./Component/Gallery";
import Onlineclass from "./Component/Onlineclass";
import Contactus from "./Component/Contactus";
import Fees from "./Component/Fees";
import Service from "./Component/Service";
import Regis from "./Component/Regis";
import NewSlider from "./Component/NewSlider";
import NewFess from "./Component/NewFess";
import Privacy from "./Component/Privacy";
import Support from "./Component/Support";
import './App.css';

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="main-content">
      {isHome ? (
        <>
          <HeroSlider />
          <NewSlider />
        </>
      ) : (
        <Routes>
          <Route path="/course" element={<Card />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/booking" element={<Regis />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/online" element={<Onlineclass />} />
          <Route path="/newfess" element={<NewFess />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Footer />
    </Router>
  );
}

export default App;
