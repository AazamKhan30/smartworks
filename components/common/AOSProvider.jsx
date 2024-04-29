"use client";

import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

const AOSProvider = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return <div></div>;
};

export default AOSProvider;
