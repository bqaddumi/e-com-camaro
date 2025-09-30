// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./Component/Navbar";
import { ProductSection } from "./Component/ProductSection";
import { AudioSection } from "./Component/AudioSection";
import { CameraLensSection } from "./Component/CameraLensSection";
import { NewsletterFooter } from "./Component/NewsletterFooter";

export const App = () => {
  return (
   
      <div>
        <Navbar />
        <ProductSection />
        <AudioSection />
        <CameraLensSection />
        <NewsletterFooter />
      </div>
  );
};
export default App;
