"use client";
import { jaraUtilits } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    jaraUtilits.pageLoad();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
