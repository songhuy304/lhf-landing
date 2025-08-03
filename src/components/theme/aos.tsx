"use client";
import AOS from "aos";
import { useEffect } from "react";

const InitAos = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return null;
};

export default InitAos;
