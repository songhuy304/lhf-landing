"use client";
import AOS from "aos";
import { useEffect } from "react";

const InitAos = () => {
  useEffect(() => {
    AOS.init({
      // Optimize AOS settings
      once: true, // Only animate elements once
      disable: window.innerWidth < 768 ? true : false, // Disable on mobile devices
      startEvent: "DOMContentLoaded",
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
    });
  }, []);
  return null;
};

export default InitAos;
