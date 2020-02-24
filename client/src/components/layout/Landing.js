import React from "react";
import HeaderTop from './HeaderTop';
import EditorPick from './EditorPick';
import SubscribeNewsletter from './SubscribeNewsletter';
import Footer from './Footer';
import "./Landing.css";

const Landing = () => (
   <div>
      <HeaderTop />
      <EditorPick />
      <SubscribeNewsletter />
      <Footer />
   </div>
);

export default Landing;