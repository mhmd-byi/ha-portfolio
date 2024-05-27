"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Popup from "@/components/popup/Index";
import { jaraUtilits } from "@/utility";
import { Fragment, useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    jaraUtilits.dataImage();
    jaraUtilits.imgToSVG();
    jaraUtilits.processImage();
    jaraUtilits.jarallax();
    jaraUtilits.animation();
    jaraUtilits.gradientText();
    jaraUtilits.waypoints();
  }, []);

  return (
    <Fragment>
      <Popup />
      <Header />
      {children}
      {/*<Footer />*/}
    </Fragment>
  );
};
export default Layout;
