import react from "react";
import { Navbar } from "./Component/Navbar";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
