import React from 'react';
import Navbar from '../Component/nav/Navbar';
import { ProductSection } from '../Component/smartphoneandtablet/ProductSection';
import AudioSection from '../Component/audioandsounds/AudioSection';
import CameraLensSection from '../Component/cameraandlens/CameraLensSection';
import NewsletterFooter from '../Component/newsandfooter/NewsletterFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductSection />
      <AudioSection />
      <CameraLensSection />
      <NewsletterFooter />
    </>
  );
}
