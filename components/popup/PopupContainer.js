"use client";
import { context } from "@/context/context";
import { jaraUtilits } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import { useContext, useEffect } from "react";

const PopContainer = ({ children, nullValue }) => {
  useEffect(() => {
    // jaraUtilits.imgToSVG();
    jaraUtilits.dataImage();
  }, []);

  const { modalToggle, modal } = useContext(context);
  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  return (
    <div className={`jara_tm_modalbox ${modal ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              modalToggle(false);
              nullValue(null);
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default PopContainer;
